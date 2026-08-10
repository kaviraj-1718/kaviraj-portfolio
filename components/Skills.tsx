"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Programming Languages",
    emoji: "⌨️",
    skills: ["Python", "SQL", "JavaScript"],
  },
  {
    title: "Frontend Development",
    emoji: "🎨",
    skills: ["HTML5", "CSS3", "React", "Tailwind CSS"],
  },
  {
    title: "Backend Development",
    emoji: "⚙️",
    skills: ["Node.js", "Express.js", "Flask", "Streamlit"],
  },
  {
    title: "AI / ML Libraries",
    emoji: "🤖",
    skills: ["NumPy", "Pandas", "Scikit-learn", "Matplotlib", "Seaborn", "TensorFlow"],
  },
  {
    title: "Databases",
    emoji: "🗄️",
    skills: ["MongoDB", "MySQL", "SQLite"],
  },
  {
    title: "Tools & Platforms",
    emoji: "🛠️",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Jupyter Notebook",
      "Google Colab",
      "Postman",
      "PyCharm",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="container">
        <div className="divider" style={{ marginBottom: "80px" }} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "56px" }}
        >
          <div className="section-label">Skills</div>
          <h2 className="section-title">
            Technologies I{" "}
            <span style={{ color: "var(--accent-light)" }}>work with</span>
          </h2>
          <p className="section-subtitle">
            A focused set of tools and technologies I have used in academic
            projects, coursework, and self-learning.
          </p>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
            alignItems: "stretch",
          }}
        >
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="glass-card"
              style={{
                padding: "28px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "20px",
                }}
              >
                <span style={{ fontSize: "20px" }}>{cat.emoji}</span>
                <h3
                  style={{
                    fontSize: "14px",
                    fontWeight: "700",
                    color: "var(--text-primary)",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {cat.title}
                </h3>
              </div>

              {/* Skills */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {cat.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05 }}
                    className="tech-tag"
                    style={{ cursor: "default" }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
