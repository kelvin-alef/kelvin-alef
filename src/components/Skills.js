import React from 'react';
import './Skills.css';
import { SiOracle, SiKubernetes, SiArgo, SiPrometheus, SiGrafana } from "react-icons/si";
import { FaDocker, FaJenkins, FaJava, FaGitAlt, FaLinux } from "react-icons/fa";

const technologies = [
  { name: 'Java', icon: <FaJava /> },
  { name: 'Git', icon: <FaGitAlt /> },
  { name: 'Jenkins', icon: <FaJenkins /> },
  { name: 'Linux', icon: <FaLinux /> },
  { name: 'OCI', icon: <SiOracle /> },
  { name: 'Docker', icon: <FaDocker /> },
  { name: 'Kubernetes', icon: <SiKubernetes /> },
  { name: 'ArgoCD', icon: <SiArgo /> },
  { name: 'Prometheus', icon: <SiPrometheus /> },
  { name: 'Grafana', icon: <SiGrafana /> },
];

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h2>Featured Technologies</h2>
        <div className="tech-grid">
          {technologies.map((tech) => (
            <div className="tech-card" key={tech.name}>
              <div className="tech-icon">{tech.icon}</div>
              <span className="tech-name">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
