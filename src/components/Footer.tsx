const Footer = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border/20 py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground tracking-wide font-body">
            © 2026 Afolayan O. Jason. All rights reserved.
          </p>
          <div className="flex gap-8">
            {["work", "about", "contact"].map((id) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-300 tracking-widest uppercase font-body"
              >
                {id}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
