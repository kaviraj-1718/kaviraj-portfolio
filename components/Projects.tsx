"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/icons";

const projects = [
  {
    number: "01",
    name: "Learning Management System",
    shortName: "LMS",
    description:
      "Developed a full stack Learning Management System using the MERN stack to manage courses, users, learning content, and role-specific access. The system provides separate workflows and permissions for administrators, instructors, and students.",
    features: [
      "Role-based access control",
      "Admin, Instructor & Student dashboards",
      "Course and content management",
      "User permission management",
      "Responsive web interface",
    ],
    tech: ["MongoDB", "Express.js", "React", "Node.js"],
    techShort: "Web Development",
    github: "https://github.com/kaviraj-1718/LMS1",
    live: null,
    accentColor: "rgba(99, 102, 241, 0.12)",
    borderColor: "rgba(99, 102, 241, 0.3)",
  },
  {
    number: "02",
    name: "Diabetes Risk Prediction System",
    shortName: "Diabetes Prediction",
    description:
      "Developed a machine learning application that predicts diabetes risk based on user provided health parameters. The system processes input data through a trained classification model and presents the prediction through an interactive Streamlit interface.",
    features: [
      "Health parameter input and validation",
      "Machine learning based risk prediction",
      "Data preprocessing and model evaluation",
      "Interactive Streamlit interface",
      "Instant prediction results",
    ],
    tech: ["Python", "Pandas", "Scikit-learn", "XGBoost", "Streamlit"],
    techShort: "Python · ML",
    github: "https://github.com/kaviraj-1718/DiabeticsPrediction",
    live: null,
    accentColor: "rgba(129, 140, 248, 0.10)",
    borderColor: "rgba(129, 140, 248, 0.25)",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="container">
        <div className="divider" style={{ marginBottom: "80px" }} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "56px" }}
        >
          <div className="section-label">Projects</div>
          <h2 className="section-title">
            Things I have{" "}
            <span style={{ color: "var(--accent-light)" }}>built</span>
          </h2>
          <p className="section-subtitle">
            A selection of projects developed to solve real problems using
            practical technology stacks.
          </p>
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: "20px",
                overflow: "hidden",
                transition: "all 0.35s ease",
              }}
              whileHover={{
                y: -6,
                boxShadow: "0 24px 64px rgba(99,102,241,0.12)",
                borderColor: "rgba(99,102,241,0.3)",
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  minHeight: "300px",
                }}
              >
                {/* Left — visual accent panel */}
                <div
                  style={{
                    background: project.accentColor,
                    borderRight: `1px solid ${project.borderColor}`,
                    padding: "48px 44px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontSize: "64px",
                        fontWeight: "900",
                        color: "rgba(99,102,241,0.12)",
                        lineHeight: "1",
                        letterSpacing: "-0.04em",
                        marginBottom: "16px",
                        fontFamily: "inherit",
                      }}
                    >
                      {project.number}
                    </div>
                    <h3
                      style={{
                        fontSize: "22px",
                        fontWeight: "800",
                        color: "var(--text-primary)",
                        letterSpacing: "-0.02em",
                        lineHeight: "1.3",
                        marginBottom: "12px",
                      }}
                    >
                      {project.name}
                    </h3>
                    <span
                      style={{
                        fontSize: "12px",
                        fontWeight: "600",
                        padding: "4px 12px",
                        background: "rgba(99,102,241,0.15)",
                        border: "1px solid rgba(99,102,241,0.25)",
                        borderRadius: "20px",
                        color: "var(--accent-light)",
                      }}
                    >
                      {project.techShort}
                    </span>
                  </div>

                  {/* Tech tags */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "24px" }}>
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        style={{
                          fontSize: "11px",
                          fontWeight: "600",
                          padding: "3px 10px",
                          background: "rgba(255,255,255,0.04)",
                          border: "1px solid rgba(255,255,255,0.08)",
                          borderRadius: "20px",
                          color: "var(--text-secondary)",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right — details */}
                <div
                  style={{
                    padding: "48px 44px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <p
                      style={{
                        fontSize: "15px",
                        color: "var(--text-secondary)",
                        lineHeight: "1.8",
                        marginBottom: "24px",
                      }}
                    >
                      {project.description}
                    </p>

                    {/* Key features */}
                    <div>
                      <div
                        style={{
                          fontSize: "11px",
                          fontWeight: "700",
                          color: "var(--text-muted)",
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          marginBottom: "12px",
                        }}
                      >
                        Key Features
                      </div>
                      <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
                        {project.features.map((f) => (
                          <li
                            key={f}
                            style={{
                              fontSize: "13px",
                              color: "var(--text-secondary)",
                              display: "flex",
                              alignItems: "flex-start",
                              gap: "8px",
                            }}
                          >
                            <span
                              style={{
                                width: "5px",
                                height: "5px",
                                borderRadius: "50%",
                                background: "var(--accent-light)",
                                flexShrink: 0,
                                marginTop: "6px",
                              }}
                            />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Links */}
                  <div style={{ display: "flex", gap: "12px", marginTop: "28px" }}>
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.97 }}
                      className="btn-primary"
                      style={{ fontSize: "13px", padding: "10px 20px" }}
                    >
                      <GithubIcon size={15} />
                      View Code
                    </motion.a>
                    {project.live ? (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.04 }}
                        className="btn-secondary"
                        style={{ fontSize: "13px", padding: "10px 20px" }}
                      >
                        <ExternalLink size={15} />
                        Live Demo
                      </motion.a>
                    ) : null}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{
            textAlign: "center",
            marginTop: "48px",
          }}
        >
          <a
            href="https://github.com/kaviraj-1718"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            style={{ display: "inline-flex" }}
          >
            <GithubIcon size={16} />
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
