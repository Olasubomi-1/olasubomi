import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navigation from "@/components/Navigation";
import { toast } from "sonner";

const steps = [
  {
    title: "What do you need?",
    key: "service",
    options: ["3D Product Animation", "App & SaaS Promo Video", "Short-Form Ad Content", "Something Else"],
  },
  {
    title: "What's the scope?",
    key: "scope",
    options: ["Just one video", "A few videos", "Ongoing monthly content"],
  },
  {
    title: "When do you need it?",
    key: "timeline",
    options: ["ASAP, it's urgent", "2–4 weeks", "I'm flexible"],
  },
  {
    title: "What's your budget range?",
    subtitle: "Helps me tailor the right package. No commitment.",
    key: "budget",
    options: ["Under $100", "$100–400", "$400+", "Not sure yet, let's discuss"],
  },
] as const;

type Answers = Record<string, string> & { name?: string; email?: string; notes?: string };

const RECIPIENT = "afolayanolasubomi@gmail.com";

export default function QuotePage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [submitted, setSubmitted] = useState(false);
  const total = 5;

  const select = (key: string, value: string) => {
    setAnswers((a) => ({ ...a, [key]: value }));
    setTimeout(() => setStep((s) => Math.min(s + 1, total - 1)), 180);
  };

  const submit = () => {
    if (!answers.name || !answers.email) {
      toast.error("Please fill in your name and email.");
      return;
    }
    const timestamp = new Date().toISOString();
    const payload = { ...answers, timestamp };

    // Persist locally as a lead
    try {
      const existing = JSON.parse(localStorage.getItem("quote_leads") || "[]");
      existing.push(payload);
      localStorage.setItem("quote_leads", JSON.stringify(existing));
    } catch {}

    const subject = `New Quote Request: ${answers.service || "Service"} from ${answers.name}`;
    const body = [
      `Service: ${answers.service || ""}`,
      `Scope: ${answers.scope || ""}`,
      `Timeline: ${answers.timeline || ""}`,
      `Budget: ${answers.budget || ""}`,
      `Name: ${answers.name || ""}`,
      `Email: ${answers.email || ""}`,
      `Notes: ${answers.notes || ""}`,
      `Submitted: ${timestamp}`,
    ].join("\n");

    // Open user's mail client to deliver notification to owner
    window.location.href = `mailto:${RECIPIENT}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  const progress = ((step + 1) / total) * 100;
  const current = steps[step];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <section className="pt-32 pb-24 min-h-screen flex items-center">
        <div className="container mx-auto px-6 max-w-2xl w-full">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/15 flex items-center justify-center">
                <Check className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                Got it. Quote's on its way.
              </h1>
              <p className="text-muted-foreground text-base md:text-lg">
                I'll review your answers and get back to you within 24 hours.
              </p>
            </motion.div>
          ) : (
            <>
              {/* Progress */}
              <div className="mb-10">
                <div className="flex items-center justify-between text-xs text-muted-foreground tracking-widest uppercase mb-3">
                  <span>Step {step + 1} of {total}</span>
                  <button
                    onClick={() => setStep((s) => Math.max(s - 1, 0))}
                    disabled={step === 0}
                    className="flex items-center gap-1 hover:text-foreground disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                  >
                    <ArrowLeft className="w-3 h-3" /> Back
                  </button>
                </div>
                <div className="h-1 w-full bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-primary"
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  />
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.3 }}
                >
                  {step < 4 && current ? (
                    <div>
                      <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
                        {current.title}
                      </h1>
                      {"subtitle" in current && current.subtitle && (
                        <p className="text-muted-foreground mb-8">{current.subtitle}</p>
                      )}
                      <div className="grid gap-3 mt-8">
                        {current.options.map((opt) => {
                          const active = answers[current.key] === opt;
                          return (
                            <button
                              key={opt}
                              onClick={() => select(current.key, opt)}
                              className={`text-left p-5 rounded-xl border transition-all duration-300 hover-lift ${
                                active
                                  ? "border-primary bg-primary/10 text-foreground"
                                  : "border-border/40 bg-card/40 hover:border-primary/40 hover:bg-card/60 text-foreground/90"
                              }`}
                            >
                              <span className="text-base font-medium">{opt}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ) : (
                    <div>
                      <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
                        Where should I send your quote?
                      </h1>
                      <p className="text-muted-foreground mb-8">
                        I'll get back to you within 24 hours.
                      </p>
                      <div className="space-y-4">
                        <div>
                          <label className="text-sm text-muted-foreground mb-2 block">Name</label>
                          <Input
                            value={answers.name || ""}
                            onChange={(e) => setAnswers({ ...answers, name: e.target.value })}
                            placeholder="Your name"
                            className="h-12"
                          />
                        </div>
                        <div>
                          <label className="text-sm text-muted-foreground mb-2 block">Email</label>
                          <Input
                            type="email"
                            value={answers.email || ""}
                            onChange={(e) => setAnswers({ ...answers, email: e.target.value })}
                            placeholder="you@example.com"
                            className="h-12"
                          />
                        </div>
                        <div>
                          <label className="text-sm text-muted-foreground mb-2 block">
                            Anything else I should know? <span className="text-muted-foreground/60">(optional)</span>
                          </label>
                          <Textarea
                            value={answers.notes || ""}
                            onChange={(e) => setAnswers({ ...answers, notes: e.target.value })}
                            placeholder="Project details, references, deadlines..."
                            rows={4}
                          />
                        </div>
                        <Button
                          onClick={submit}
                          size="lg"
                          className="w-full rounded-full py-6 text-base font-semibold tracking-wide shadow-lg hover:shadow-glow mt-2"
                        >
                          Send my quote request
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </>
          )}
        </div>
      </section>
    </div>
  );
}