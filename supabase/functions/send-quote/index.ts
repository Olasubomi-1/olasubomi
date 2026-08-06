import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors'

interface QuotePayload {
  service?: string
  scope?: string
  timeline?: string
  budget?: string
  name?: string
  email?: string
  notes?: string
}

const RECIPIENT = 'afolayanolasubomi@gmail.com'
const FROM = 'Quote Form <onboarding@resend.dev>'

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY')
    const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')
    if (!LOVABLE_API_KEY || !RESEND_API_KEY) {
      return new Response(
        JSON.stringify({ error: 'Email service not configured' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
      )
    }

    const body = (await req.json()) as QuotePayload
    const { name, email, service, scope, timeline, budget, notes } = body

    if (!name || !email) {
      return new Response(
        JSON.stringify({ error: 'Name and email are required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
      )
    }

    const timestamp = new Date().toISOString()
    const subject = `New Quote Request: ${service || 'Service'} from ${name}`

    const escape = (s: string) =>
      s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

    const row = (label: string, value?: string) =>
      `<tr><td style="padding:6px 12px;font-weight:600;color:#0D1F35;">${label}</td><td style="padding:6px 12px;color:#334155;">${escape(value || '—')}</td></tr>`

    const html = `
      <div style="font-family:Inter,Arial,sans-serif;background:#F8FAFC;padding:24px;">
        <div style="max-width:560px;margin:0 auto;background:#ffffff;border:1px solid #E2EAF4;border-radius:12px;overflow:hidden;">
          <div style="padding:20px 24px;border-bottom:1px solid #E2EAF4;">
            <h2 style="margin:0;color:#0D1F35;font-size:18px;">New Quote Request</h2>
          </div>
          <table style="width:100%;border-collapse:collapse;font-size:14px;">
            ${row('Service', service)}
            ${row('Scope', scope)}
            ${row('Timeline', timeline)}
            ${row('Budget', budget)}
            ${row('Name', name)}
            ${row('Email', email)}
            ${row('Notes', notes)}
            ${row('Submitted', timestamp)}
          </table>
        </div>
      </div>`

    const text = [
      `Service: ${service || ''}`,
      `Scope: ${scope || ''}`,
      `Timeline: ${timeline || ''}`,
      `Budget: ${budget || ''}`,
      `Name: ${name}`,
      `Email: ${email}`,
      `Notes: ${notes || ''}`,
      `Submitted: ${timestamp}`,
    ].join('\n')

    const resendRes = await fetch('https://connector-gateway.lovable.dev/resend/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        'X-Connection-Api-Key': RESEND_API_KEY,
      },
      body: JSON.stringify({
        from: FROM,
        to: [RECIPIENT],
        reply_to: email,
        subject,
        html,
        text,
      }),
    })

    if (!resendRes.ok) {
      const details = await resendRes.text()
      console.error(`Resend send failed [${resendRes.status}]: ${details}`)
      return new Response(
        JSON.stringify({ error: 'Failed to send email', status: resendRes.status, details }),
        { status: resendRes.status, headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
      )
    }

    const data = await resendRes.json()
    return new Response(JSON.stringify({ ok: true, id: data?.id }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  } catch (err) {
    console.error('send-quote error:', err)
    return new Response(
      JSON.stringify({ error: (err as Error).message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
    )
  }
})