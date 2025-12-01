const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-12 bg-card/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 Afolayan. All rights reserved.
          </p>
          <div className="flex gap-6">
            <button
              onClick={() => {
                const element = document.getElementById("work");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Work
            </button>
            <button
              onClick={() => {
                const element = document.getElementById("about");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              About
            </button>
            <button
              onClick={() => {
                const element = document.getElementById("contact");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
