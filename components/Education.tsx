"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

const educationData = [
  {
    degree: "B.Tech — Artificial Intelligence & Machine Learning",
    institution: "Bannari Amman Institute of Technology",
    location: "Erode, Tamilnadu",
    period: "2022 – 2026",
    metric: "CGPA: 8.44",
    metricLabel: "CGPA",
    highlight: true,
    icon: <GraduationCap size={20} />,
  },
  {
    degree: "Grade XII (HSC)",
    institution: "Literacy Mission Matric. Hr. Sec. School",
    location: "Tiruppur, Tamilnadu",
    period: "2022",
    metric: "90.33%",
    metricLabel: "Aggregate",
    highlight: false,
    icon: <Award size={20} />,
  },
  {
    degree: "Grade X (SSLC)",
    institution: "Literacy Mission Matric. Hr. Sec. School",
    location: "Tiruppur, Tamilnadu",
    period: "2020",
    metric: "87%",
    metricLabel: "Aggregate",
    highlight: false,
    icon: <Award size={20} />,
  },
];

export default function Education() {
  return (
    <section id="education" className="section-padding">
      <div className="container">
        <div className="divider" style={{ marginBottom: "80px" }} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "56px" }}
        >
          <div className="section-label">Education</div>
          <h2 className="section-title">
            Academic{" "}
            <span style={{ color: "var(--accent-light)" }}>Background</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div style={{ position: "relative" }}>
          {/* Vertical line */}
          <div
            style={{
              position: "absolute",
              left: "20px",
              top: "0",
              bottom: "0",
              width: "1px",
              background:
                "linear-gradient(to bottom, var(--accent), rgba(99,102,241,0.1))",
            }}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            {educationData.map((edu, i) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{
                  paddingLeft: "60px",
                  position: "relative",
                }}
              >
                {/* Timeline dot */}
                <div
                  style={{
                    position: "absolute",
                    left: "10px",
                    top: "24px",
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    background: edu.highlight
                      ? "var(--accent)"
                      : "var(--bg-card)",
                    border: "2px solid var(--accent)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transform: "translateX(-50%)",
                    boxShadow: edu.highlight
                      ? "0 0 16px rgba(99,102,241,0.5)"
                      : "none",
                    zIndex: 1,
                  }}
                />

                <div
                  className="glass-card"
                  style={{
                    padding: "28px 32px",
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    gap: "24px",
                    flexWrap: "wrap",
                    background: edu.highlight
                      ? "rgba(99,102,241,0.06)"
                      : "var(--bg-card)",
                    borderColor: edu.highlight
                      ? "rgba(99,102,241,0.25)"
                      : "var(--border)",
                  }}
                >
                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        fontSize: "12px",
                        fontWeight: "600",
                        color: "var(--text-muted)",
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        marginBottom: "8px",
                      }}
                    >
                      {edu.period}
                    </div>
                    <h3
                      style={{
                        fontSize: "17px",
                        fontWeight: "700",
                        color: "var(--text-primary)",
                        letterSpacing: "-0.01em",
                        marginBottom: "6px",
                        lineHeight: "1.3",
                      }}
                    >
                      {edu.degree}
                    </h3>
                    <div
                      style={{
                        fontSize: "14px",
                        color: "var(--text-secondary)",
                      }}
                    >
                      {edu.institution}
                    </div>
                    <div
                      style={{
                        fontSize: "12px",
                        color: "var(--text-muted)",
                        marginTop: "4px",
                      }}
                    >
                      {edu.location}
                    </div>
                  </div>

                  {/* Metric badge */}
                  <div
                    style={{
                      textAlign: "center",
                      padding: "16px 24px",
                      background: edu.highlight
                        ? "rgba(99,102,241,0.12)"
                        : "rgba(255,255,255,0.03)",
                      border: "1px solid",
                      borderColor: edu.highlight
                        ? "rgba(99,102,241,0.25)"
                        : "rgba(255,255,255,0.06)",
                      borderRadius: "12px",
                      flexShrink: 0,
                    }}
                  >
                    <div
                      style={{
                        fontSize: "22px",
                        fontWeight: "800",
                        color: edu.highlight
                          ? "var(--accent-light)"
                          : "var(--text-primary)",
                        letterSpacing: "-0.02em",
                        lineHeight: "1",
                        marginBottom: "4px",
                      }}
                    >
                      {edu.metric}
                    </div>
                    <div
                      style={{
                        fontSize: "10px",
                        fontWeight: "600",
                        color: "var(--text-muted)",
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                      }}
                    >
                      {edu.metricLabel}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
