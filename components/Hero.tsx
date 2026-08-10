"use client";

import { motion } from "framer-motion";
import { ArrowDown, Mail, ExternalLink } from "lucide-react";

// Inline SVG icons for social platforms not available in lucide-react v1.x
const GithubIcon = ({ size = 22 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

const LinkedinIcon = ({ size = 22 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

export default function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        paddingTop: "80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Grid pattern background */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          backgroundImage: `
            linear-gradient(rgba(99,102,241,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99,102,241,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
        }}
      />


      <div className="container" style={{ width: "100%" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: "60px",
            alignItems: "center",
          }}
        >
          {/* Left — content */}
          <div>
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "6px 14px",
                background: "rgba(99,102,241,0.08)",
                border: "1px solid rgba(99,102,241,0.2)",
                borderRadius: "20px",
                marginBottom: "28px",
                fontSize: "13px",
                fontWeight: "500",
                color: "var(--accent-light)",
              }}
            >
              <span className="glow-dot" />
              Open to Software Developer Opportunities
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{
                fontSize: "clamp(42px, 7vw, 76px)",
                fontWeight: "900",
                lineHeight: "1.05",
                letterSpacing: "-0.035em",
                color: "var(--text-primary)",
                marginBottom: "8px",
              }}
            >
              Kaviraj{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #6366f1 0%, #818cf8 50%, #a5b4fc 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                K R
              </span>
            </motion.h1>

            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                fontSize: "clamp(18px, 3vw, 26px)",
                fontWeight: "600",
                color: "var(--text-secondary)",
                marginBottom: "24px",
                display: "flex",
                alignItems: "center",
                gap: "12px",
                flexWrap: "wrap",
              }}
            >
              Software Developer
              <span style={{ color: "var(--border)", fontWeight: "300" }}>|</span>
              <span style={{ color: "var(--accent-light)", fontSize: "clamp(14px, 2vw, 18px)" }}>
                Python · Web Dev · ML
              </span>
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{
                fontSize: "17px",
                color: "var(--text-muted)",
                maxWidth: "520px",
                lineHeight: "1.75",
                marginBottom: "40px",
              }}
            >
              B.Tech AI & ML graduate from{" "}
              <span style={{ color: "var(--text-secondary)" }}>
                Bannari Amman Institute of Technology
              </span>{" "}
              (CGPA 8.44), interested in building software that solves real problems.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{
                display: "flex",
                gap: "12px",
                flexWrap: "wrap",
                marginBottom: "48px",
              }}
            >
              <a
                href="#projects"
                className="btn-primary"
                style={{ fontSize: "15px" }}
                onClick={(e) => { e.preventDefault(); handleScroll("#projects"); }}
              >
                View Projects
                <ExternalLink size={16} />
              </a>

              <a
                href="#contact"
                className="btn-secondary"
                style={{ fontSize: "15px" }}
                onClick={(e) => { e.preventDefault(); handleScroll("#contact"); }}
              >
                <Mail size={16} />
                Contact Me
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              style={{ display: "flex", alignItems: "center", gap: "16px" }}
            >
              <span style={{ fontSize: "12px", color: "var(--text-muted)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                Find me on
              </span>
              <div style={{ width: "32px", height: "1px", background: "var(--border)" }} />
              <a
                href="https://github.com/kaviraj-1718"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--text-secondary)", transition: "color 0.2s", display: "flex" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--accent-light)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--text-secondary)")}
                aria-label="GitHub"
              >
                <GithubIcon size={22} />
              </a>
              <a
                href="https://linkedin.com/in/kaviraj18"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--text-secondary)", transition: "color 0.2s", display: "flex" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--accent-light)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--text-secondary)")}
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={22} />
              </a>
              <a
                href="mailto:kaviraj.rajendran.kr@gmail.com"
                style={{ color: "var(--text-secondary)", transition: "color 0.2s", display: "flex" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--accent-light)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--text-secondary)")}
                aria-label="Email"
              >
                <Mail size={22} />
              </a>
            </motion.div>
          </div>

          {/* Right — Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="hidden lg:block"
            style={{ flexShrink: 0 }}
          >
            <div
              style={{
                width: "280px",
                height: "280px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, rgba(99,102,241,0.08), rgba(129,140,248,0.04))",
                border: "1px solid rgba(99,102,241,0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
              }}
            >
              {/* Rotating ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                style={{
                  position: "absolute",
                  inset: "-12px",
                  borderRadius: "50%",
                  border: "1px dashed rgba(99,102,241,0.2)",
                }}
              />
              {/* Inner ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                style={{
                  position: "absolute",
                  inset: "-28px",
                  borderRadius: "50%",
                  border: "1px dashed rgba(99,102,241,0.1)",
                }}
              />
              {/* Avatar Illustration */}
              <div
                style={{
                  width: "230px",
                  height: "230px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  boxShadow:
                    "0 0 40px rgba(99,102,241,0.4), 0 0 80px rgba(99,102,241,0.15)",
                  border: "2px solid rgba(99,102,241,0.35)",
                  position: "relative",
                  background: "#0a0a0f",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/profile.jpg"
                  alt="Kaviraj K R — Developer Avatar"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center center",
                    display: "block",
                  }}
                />
              </div>

              {/* Floating tech badges */}
              {[
                { label: "Python", top: "8%", right: "-16%" },
                { label: "ML", bottom: "12%", right: "-18%" },
                { label: "Web Dev", top: "50%", left: "-22%", transform: "translateY(-50%)" },
              ].map((badge) => (
                <motion.div
                  key={badge.label}
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  style={{
                    position: "absolute",
                    top: badge.top,
                    bottom: badge.bottom,
                    left: badge.left,
                    right: badge.right,
                    transform: badge.transform,
                    background: "var(--bg-card)",
                    border: "1px solid rgba(99,102,241,0.25)",
                    borderRadius: "8px",
                    padding: "6px 12px",
                    fontSize: "12px",
                    fontWeight: "600",
                    color: "var(--accent-light)",
                    whiteSpace: "nowrap",
                  }}
                >
                  {badge.label}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          style={{
            position: "absolute",
            bottom: "32px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "6px",
            cursor: "pointer",
          }}
          onClick={() => handleScroll("#about")}
        >
          <span style={{ fontSize: "11px", color: "var(--text-muted)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
            scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={16} color="var(--text-muted)" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
