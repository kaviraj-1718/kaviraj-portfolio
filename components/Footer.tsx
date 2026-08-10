"use client";

import { motion } from "framer-motion";
import { Mail, Heart, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    icon: <GithubIcon size={18} />,
    href: "https://github.com/kaviraj-1718",
    label: "GitHub",
  },
  {
    icon: <LinkedinIcon size={18} />,
    href: "https://linkedin.com/in/kaviraj18",
    label: "LinkedIn",
  },
  {
    icon: <Mail size={18} />,
    href: "mailto:kaviraj.rajendran.kr@gmail.com",
    label: "Email",
  },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        background: "var(--bg-secondary)",
        padding: "32px 0 20px",
      }}
    >
      <div className="container">
        {/* Top row */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: "24px",
            flexWrap: "wrap",
            marginBottom: "24px",
          }}
        >
          {/* Brand */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {/* Name with gradient */}
            <div>
              <div
                style={{
                  fontSize: "18px",
                  fontWeight: "800",
                  letterSpacing: "-0.02em",
                  background: "linear-gradient(135deg, #f8fafc 0%, #818cf8 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  marginBottom: "4px",
                }}
              >
                Kaviraj K R
              </div>
              <div
                style={{
                  fontSize: "12px",
                  color: "var(--text-muted)",
                  fontWeight: "500",
                  letterSpacing: "0.02em",
                }}
              >
                Software Developer · AI &amp; ML · Web Dev
              </div>
            </div>
          </div>

          {/* Nav links */}
          <div>
            <div
              style={{
                fontSize: "11px",
                fontWeight: "700",
                color: "var(--text-muted)",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: "14px",
              }}
            >
              Navigation
            </div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "13px",
                      color: "var(--text-muted)",
                      fontFamily: "inherit",
                      padding: 0,
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => ((e.target as HTMLButtonElement).style.color = "var(--text-primary)")}
                    onMouseLeave={(e) => ((e.target as HTMLButtonElement).style.color = "var(--text-muted)")}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social links */}
          <div>
            <div
              style={{
                fontSize: "11px",
                fontWeight: "700",
                color: "var(--text-muted)",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: "14px",
              }}
            >
              Connect
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    fontSize: "13px",
                    color: "var(--text-muted)",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--accent-light)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--text-muted)")}
                >
                  {s.icon}
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="divider" style={{ marginBottom: "16px" }} />

        {/* Bottom row */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", position: "relative" }}>
          <p style={{ fontSize: "12px", color: "var(--text-muted)" }}>
            Built by Kaviraj K R
          </p>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            style={{
              position: "absolute",
              right: 0,
              background: "rgba(99,102,241,0.1)",
              border: "1px solid rgba(99,102,241,0.2)",
              borderRadius: "8px",
              padding: "6px 12px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "12px",
              color: "var(--accent-light)",
              fontFamily: "inherit",
              fontWeight: "600",
            }}
          >
            <ArrowUp size={13} />
            Back to top
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
