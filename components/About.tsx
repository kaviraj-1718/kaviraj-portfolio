"use client";

import { motion } from "framer-motion";
import { MapPin, GraduationCap, Code2, Briefcase } from "lucide-react";

const highlights = [
  {
    icon: <GraduationCap size={20} />,
    label: "Education",
    value: "CGPA 8.44 (2022-2026)",
  },
  {
    icon: <Code2 size={20} />,
    label: "Core Focus",
    value: "Python · Web Development · Machine Learning",
  },
  {
    icon: <Briefcase size={20} />,
    label: "Status",
    value: "Entry-Level · Open to Opportunities",
  },
  {
    icon: <MapPin size={20} />,
    label: "Location",
    value: "Tiruppur, Tamil Nadu, India",
  },
];

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container">
        <div className="divider" style={{ marginBottom: "80px" }} />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "center",
          }}
        >
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-label">About Me</div>
            <h2 className="section-title">
              Turning ideas,{" "}
              <span style={{ color: "var(--accent-light)" }}>into</span>
              <br />
              practical solutions.
            </h2>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                marginTop: "28px",
              }}
            >
              <p
                style={{
                  fontSize: "16px",
                  color: "var(--text-secondary)",
                  lineHeight: "1.8",
                }}
              >
                I am a motivated B.Tech graduate in Artificial Intelligence and
                Machine Learning from Bannari Amman Institute of Technology. I
                have a strong academic foundation and practical experience
                gained through various projects. I enjoy learning new
                technologies and continuously improving my technical and
                professional skills.
              </p>
              <p
                style={{
                  fontSize: "16px",
                  color: "var(--text-secondary)",
                  lineHeight: "1.8",
                }}
              >
                I like taking on new challenges and building practical
                solutions, especially in software development and machine
                learning. I am passionate about applying my knowledge to real
                world problems, creating useful applications, and growing
                through continuous learning and experience.
              </p>
            </div>

            {/* Interest tags */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "28px" }}>
              {[
                "Python Programming",
                "Web Development",
                "Machine Learning",
                "Problem Solving",
              ].map((tag) => (
                <span key={tag} className="tech-tag">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right — highlight cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "16px",
            }}
          >
            {highlights.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.2 }}
                whileHover={{ y: -5 }}
                style={{
                  padding: "28px 24px",
                  background: "var(--bg-card)",
                  borderRadius: "16px",
                  border: "1px solid var(--border)",
                  position: "relative",
                  overflow: "hidden",
                  cursor: "default",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.25)",
                }}
              >
                {/* Top gradient accent line */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "2px",
                    background:
                      "linear-gradient(90deg, #6366f1 0%, #818cf8 60%, transparent 100%)",
                    borderRadius: "16px 16px 0 0",
                  }}
                />

                {/* Icon box */}
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    background:
                      "linear-gradient(135deg, rgba(99,102,241,0.2), rgba(99,102,241,0.06))",
                    border: "1px solid rgba(99,102,241,0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--accent-light)",
                    marginBottom: "20px",
                    boxShadow: "0 0 16px rgba(99,102,241,0.2)",
                  }}
                >
                  {item.icon}
                </div>

                {/* Label */}
                <div
                  style={{
                    fontSize: "10px",
                    fontWeight: "700",
                    color: "var(--text-muted)",
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                    marginBottom: "8px",
                  }}
                >
                  {item.label}
                </div>

                {/* Value */}
                <div
                  style={{
                    fontSize: "15px",
                    fontWeight: "700",
                    color: "var(--text-primary)",
                    lineHeight: "1.35",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {item.value}
                </div>

                {/* Corner glow */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "-24px",
                    right: "-24px",
                    width: "90px",
                    height: "90px",
                    borderRadius: "50%",
                    background:
                      "radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 70%)",
                    pointerEvents: "none",
                  }}
                />
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
