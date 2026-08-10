"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

const contactInfo = [
  {
    icon: <Mail size={20} />,
    label: "Email",
    value: "kaviraj.rajendran.kr@gmail.com",
    href: "mailto:kaviraj.rajendran.kr@gmail.com",
    featured: true,
  },
  {
    icon: <Phone size={20} />,
    label: "Phone",
    value: "+91 9976850397",
    href: "tel:+919976850397",
    featured: false,
  },
  {
    icon: <GithubIcon size={20} />,
    label: "GitHub",
    value: "github.com/kaviraj-1718",
    href: "https://github.com/kaviraj-1718",
    featured: false,
  },
  {
    icon: <LinkedinIcon size={20} />,
    label: "LinkedIn",
    value: "linkedin.com/in/kaviraj18",
    href: "https://linkedin.com/in/kaviraj18",
    featured: false,
  },
  {
    icon: <MapPin size={20} />,
    label: "Location",
    value: "Tiruppur, Tamilnadu, India",
    href: null,
    featured: false,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="container">
        <div className="divider" style={{ marginBottom: "80px" }} />

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "56px", textAlign: "center" }}
        >
          <div className="section-label" style={{ justifyContent: "center" }}>
            Contact
          </div>
          <h2 className="section-title" style={{ textAlign: "center" }}>
            Let&apos;s{" "}
            <span style={{ color: "var(--accent-light)" }}>Connect</span>
          </h2>
          <p
            className="section-subtitle"
            style={{ textAlign: "center", maxWidth: "480px", margin: "0 auto" }}
          >
            I am open to entry-level Software Developer opportunities. Feel free to reach out if you'd like to connect or discuss an opportunity.
          </p>
        </motion.div>

        {/* Featured email CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{ display: "flex", justifyContent: "center", marginBottom: "40px" }}
        >
          <motion.a
            href="mailto:kaviraj.rajendran.kr@gmail.com"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              padding: "18px 36px",
              background: "linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)",
              borderRadius: "14px",
              textDecoration: "none",
              color: "white",
              fontWeight: "700",
              fontSize: "17px",
              boxShadow: "0 8px 32px rgba(99,102,241,0.35)",
              letterSpacing: "-0.01em",
            }}
          >
            <Mail size={22} />
            kaviraj.rajendran.kr@gmail.com
          </motion.a>
        </motion.div>

        {/* Other contact links */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "14px",
          }}
        >
          {contactInfo
            .filter((c) => !c.featured)
            .map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25 + i * 0.07 }}
                whileHover={{ y: -3 }}
              >
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      item.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      padding: "12px 20px",
                      background: "var(--bg-card)",
                      border: "1px solid var(--border)",
                      borderRadius: "12px",
                      textDecoration: "none",
                      color: "var(--text-secondary)",
                      fontSize: "14px",
                      fontWeight: "500",
                      transition: "border-color 0.2s, color 0.2s",
                      whiteSpace: "nowrap",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.borderColor =
                        "rgba(99,102,241,0.4)";
                      (e.currentTarget as HTMLAnchorElement).style.color =
                        "var(--text-primary)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.borderColor =
                        "var(--border)";
                      (e.currentTarget as HTMLAnchorElement).style.color =
                        "var(--text-secondary)";
                    }}
                  >
                    <span style={{ color: "var(--accent-light)", display: "flex" }}>
                      {item.icon}
                    </span>
                    <span>
                      <span
                        style={{
                          fontSize: "10px",
                          fontWeight: "700",
                          color: "var(--text-muted)",
                          textTransform: "uppercase",
                          letterSpacing: "0.07em",
                          display: "block",
                          lineHeight: 1,
                          marginBottom: "2px",
                        }}
                      >
                        {item.label}
                      </span>
                      {item.value}
                    </span>
                  </a>
                ) : (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      padding: "12px 20px",
                      background: "var(--bg-card)",
                      border: "1px solid var(--border)",
                      borderRadius: "12px",
                      color: "var(--text-secondary)",
                      fontSize: "14px",
                      fontWeight: "500",
                      whiteSpace: "nowrap",
                    }}
                  >
                    <span style={{ color: "var(--accent-light)", display: "flex" }}>
                      {item.icon}
                    </span>
                    <span>
                      <span
                        style={{
                          fontSize: "10px",
                          fontWeight: "700",
                          color: "var(--text-muted)",
                          textTransform: "uppercase",
                          letterSpacing: "0.07em",
                          display: "block",
                          lineHeight: 1,
                          marginBottom: "2px",
                        }}
                      >
                        {item.label}
                      </span>
                      {item.value}
                    </span>
                  </div>
                )}
              </motion.div>
            ))}
        </motion.div>
      </div>
    </section>
  );
}
