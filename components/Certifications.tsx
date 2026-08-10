"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "Introduction to Machine Learning",
    issuer: "NPTEL — IIT",
    type: "NPTEL Certification",
    description:
      "Completed the NPTEL online course on Machine Learning Fundamentals, covering supervised learning, model evaluation, and core ML algorithms, and secured 63% overall.",
    link: null,
    color: "rgba(99,102,241,0.1)",
    borderColor: "rgba(99,102,241,0.25)",
  },
  {
    title: "The Joy of Computing Using Python",
    issuer: "NPTEL — IIT",
    type: "NPTEL Certification",
    description:
      "Completed the NPTEL online course covering Python programming fundamentals, problem-solving, and computational thinking, and secured 68% overall.",
    link: null,
    color: "rgba(129,140,248,0.08)",
    borderColor: "rgba(129,140,248,0.2)",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding">
      <div className="container">
        <div className="divider" style={{ marginBottom: "80px" }} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "56px" }}
        >
          <div className="section-label">Certifications & Courses</div>
          <h2 className="section-title">
            Certifications{" "}
            <span style={{ color: "var(--accent-light)" }}></span>
          </h2>
          <p className="section-subtitle">
            Certifications earned through nationally recognized online learning
            platforms.
          </p>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: "20px",
          }}
        >
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card"
              style={{
                padding: "28px",
                background: cert.color,
                borderColor: cert.borderColor,
              }}
            >
              {/* Header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "14px",
                  marginBottom: "16px",
                }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    background: "rgba(99,102,241,0.15)",
                    border: "1px solid rgba(99,102,241,0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--accent-light)",
                    flexShrink: 0,
                  }}
                >
                  <Award size={20} />
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "11px",
                      fontWeight: "600",
                      color: "var(--accent-light)",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      marginBottom: "4px",
                    }}
                  >
                    {cert.type}
                  </div>
                  <h3
                    style={{
                      fontSize: "16px",
                      fontWeight: "700",
                      color: "var(--text-primary)",
                      letterSpacing: "-0.01em",
                      lineHeight: "1.3",
                    }}
                  >
                    {cert.title}
                  </h3>
                </div>
              </div>

              <div
                style={{
                  fontSize: "13px",
                  fontWeight: "600",
                  color: "var(--text-secondary)",
                  marginBottom: "12px",
                }}
              >
                {cert.issuer}
              </div>

              <p
                style={{
                  fontSize: "13px",
                  color: "var(--text-muted)",
                  lineHeight: "1.7",
                }}
              >
                {cert.description}
              </p>

              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    marginTop: "16px",
                    fontSize: "12px",
                    fontWeight: "600",
                    color: "var(--accent-light)",
                    textDecoration: "none",
                    transition: "opacity 0.2s",
                  }}
                >
                  <ExternalLink size={13} />
                  View Certificate
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
