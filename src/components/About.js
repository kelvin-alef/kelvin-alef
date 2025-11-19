import React from 'react';
import './About.css';
import profilePic from '../assets/profile.png';

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2>About Me</h2>
        <div className="about-content">
          <img 
            src={profilePic} 
            alt="Kelvin Alef" 
            className="profile-pic"
          />
          <div className="about-text">
            <p>
              Highly experienced DevOps Engineer with over 8 years in software development and DevOps, specializing in Docker, Kubernetes, ArgoCD, CI/CD, Jenkins, SonarQube, and observability tools such as Prometheus, Grafana, and Loki. Skilled in automating infrastructure, mentoring teams in DevOps practices, and optimizing system performance to meet strategic business objectives. Proficient in Java and PostgreSQL, with a strong track record in modernizing legacy applications and creating scalable, robust cloud infrastructures.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
