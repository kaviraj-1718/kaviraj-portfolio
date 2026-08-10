"use client";

import { motion } from "framer-motion";
import { Trophy, Users } from "lucide-react";

const achievements = [
  {
    type: "achievement",
    icon: <Trophy size={20} />,
    title: '2nd Place — "Pitch For Tomorrow"',
    subtitle: "IEF's E-Horyzon 2K26",
    organization: "Kongu Engineering College",
    description:
      'Secured 2nd place in the "Pitch For Tomorrow" competition, a national-level innovation pitching event organized by the Indian Entrepreneurship Foundation at E-Horyzon 2K26, Kongu Engineering College.',
    color: "rgba(99, 102, 241, 0.08)",
    borderColor: "rgba(99, 102, 241, 0.25)",
    iconColor: "var(--accent-light)",
    iconBg: "rgba(99, 102, 241, 0.15)",
    badge: "🏆 2nd Place",
    badgeColor: "rgba(99,102,241,0.12)",
    badgeBorderColor: "rgba(99,102,241,0.3)",
    badgeTextColor: "var(--accent-light)",
  },
];

const competitions = [
  {
    name: "E-SUMMIT",
    organizer: "IIT BHU",
    description:
      "Participated in E-Summit, a premier entrepreneurship summit organized by the Entrepreneurship Cell of IIT (BHU), Varanasi, gaining valuable insights into entrepreneurship, innovation, and business development.",
  },
  {
    name: "Lumos Innovate-A-thon",
    organizer: "Innovation Hackathon",
    description:
      "Participated in the Lumos Innovate-A-thon, conducted by Lumos Labs, gaining hands-on experience in problem-solving, innovation, and developing practical solutions to real world challenges.",
  },
  {
    name: "NCICT",
    organizer: "Anna University",
    description:
      "Participated in the NCICT (National Conference on Information & Communication Technology) organized by Anna University, gaining valuable knowledge and exposure through expert sessions and technical discussions.",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="section-padding">
      <div className="container">
        <div className="divider" style={{ marginBottom: "80px" }} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "56px" }}
        >
          <div className="section-label">Achievements</div>
          <h2 className="section-title">
            Recognition &{" "}
            <span style={{ color: "var(--accent-light)" }}>Participation</span>
          </h2>
          <p className="section-subtitle">
            Academic and extracurricular recognition earned through competitions
            and events.
          </p>
        </motion.div>

        {/* Main achievement */}
        {achievements.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="glass-card"
            style={{
              padding: "36px",
              marginBottom: "32px",
              background: item.color,
              borderColor: item.borderColor,
              display: "flex",
              gap: "24px",
              alignItems: "flex-start",
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                width: "52px",
                height: "52px",
                borderRadius: "14px",
                background: item.iconBg,
                border: `1px solid ${item.borderColor}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: item.iconColor,
                flexShrink: 0,
              }}
            >
              {item.icon}
            </div>
            <div style={{ flex: 1 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  flexWrap: "wrap",
                  marginBottom: "8px",
                }}
              >
                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: "800",
                    color: "var(--text-primary)",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {item.title}
                </h3>
                <span
                  style={{
                    fontSize: "12px",
                    fontWeight: "700",
                    padding: "3px 12px",
                    background: item.badgeColor,
                    border: `1px solid ${item.badgeBorderColor}`,
                    borderRadius: "20px",
                    color: item.badgeTextColor,
                  }}
                >
                  {item.badge}
                </span>
              </div>
              <div
                style={{
                  fontSize: "14px",
                  fontWeight: "600",
                  color: "var(--text-secondary)",
                  marginBottom: "4px",
                }}
              >
                {item.subtitle}
              </div>
              <div
                style={{
                  fontSize: "12px",
                  color: "var(--text-muted)",
                  marginBottom: "14px",
                }}
              >
                {item.organization}
              </div>
              <p
                style={{
                  fontSize: "14px",
                  color: "var(--text-secondary)",
                  lineHeight: "1.7",
                }}
              >
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}

        {/* Competitions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "20px",
            }}
          >
            <div
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "8px",
                background: "rgba(99,102,241,0.12)",
                border: "1px solid rgba(99,102,241,0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--accent-light)",
              }}
            >
              <Users size={16} />
            </div>
            <h3
              style={{
                fontSize: "16px",
                fontWeight: "700",
                color: "var(--text-primary)",
              }}
            >
              Competitions & Events
            </h3>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "16px",
            }}
          >
            {competitions.map((comp, i) => (
              <motion.div
                key={comp.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass-card"
                style={{ padding: "20px 24px" }}
              >
                <div
                  style={{
                    fontSize: "15px",
                    fontWeight: "700",
                    color: "var(--text-primary)",
                    marginBottom: "4px",
                  }}
                >
                  {comp.name}
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    color: "var(--accent-light)",
                    fontWeight: "600",
                    marginBottom: "10px",
                  }}
                >
                  {comp.organizer}
                </div>
                <p
                  style={{
                    fontSize: "13px",
                    color: "var(--text-muted)",
                    lineHeight: "1.6",
                  }}
                >
                  {comp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
