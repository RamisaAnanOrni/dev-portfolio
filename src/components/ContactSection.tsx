import { useState } from "react";
import { Github, Linkedin, Mail, ArrowUpRight, Phone, Copy } from "lucide-react";

const socials = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/RamisaAnanOrni",
    color: "hover:text-white hover:bg-[#333]",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/RamisaAnanOrni/",
    color: "hover:text-white hover:bg-[#0077B5]",
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="section-subheading mx-auto">
            Open to opportunities, collaborations, and interesting conversations
          </p>
        </div>

        <div data-reveal-stagger className="max-w-2xl mx-auto space-y-8">
          <div className="project-card p-8 text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/30 glow-effect">
              <Mail className="text-primary" size={28} />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">
              Reach Out Directly
            </h3>
            <p className="text-muted-foreground mb-6">
              Have a project idea or just want to say hi? My inbox is always
              open.
            </p>
            <button
              type="button"
              className="btn-primary inline-flex items-center gap-2"
              onClick={(e) => {
                e.preventDefault();
                const to = "ornianan62@gmail.com";
                const gmailWeb = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(to)}`;
                const gmailApp = `googlegmail://co?to=${encodeURIComponent(to)}`;
                const isMobile = /iPhone|iPad|iPod|Android/i.test(
                  navigator.userAgent
                );

                if (isMobile) {
                  try {
                    window.location.href = gmailApp;
                  } catch {
                    // ignore
                  }
                  setTimeout(() => {
                    window.open(gmailWeb, "_blank", "noopener");
                  }, 600);
                } else {
                  window.open(gmailWeb, "_blank", "noopener");
                }
              }}
            >
              Send an Email
              <ArrowUpRight size={16} />
            </button>

            <div className="mt-4 text-sm">
              <div className="inline-flex items-center gap-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-primary" />
                <a
                  href="tel:9822446744"
                  className="font-medium text-foreground"
                >
                  9822446744
                </a>
                <button
                  type="button"
                  aria-label="Copy phone"
                  onClick={() => navigator.clipboard?.writeText("9822446744")}
                  className="p-2 rounded-md bg-secondary/10 hover:bg-secondary/20 transition-colors"
                >
                  <Copy className="w-4 h-4 text-muted-foreground" />
                </button>
              </div>

              <EmailCopyRow />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`skill-card p-6 text-center group transition-all duration-300 ${social.color}`}
              >
                <social.icon className="w-8 h-8 mx-auto mb-3 transition-transform group-hover:scale-110" />
                <span className="text-sm font-medium">{social.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

function EmailCopyRow() {
  const [copied, setCopied] = useState(false);
  const email = "ornianan62@gmail.com";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // ignore
    }
  };

  return (
    <div className="mt-3 inline-flex items-center gap-3 text-muted-foreground">
      <Mail className="w-5 h-5 text-primary" />
      <a href={`mailto:${email}`} className="font-medium text-foreground">
        {email}
      </a>
      <button
        type="button"
        aria-label="Copy email"
        onClick={handleCopy}
        className="p-2 rounded-md bg-secondary/10 hover:bg-secondary/20 transition-colors"
      >
        <Copy className="w-4 h-4 text-muted-foreground" />
      </button>
      <span className="ml-2 text-sm text-primary" aria-hidden>
        {copied ? "Copied!" : ""}
      </span>
    </div>
  );
}
