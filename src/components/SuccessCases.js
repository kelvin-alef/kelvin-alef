import React from 'react';
import './SuccessCases.css';

const successCasesData = [
  {
    title: 'CI/CD Automation and Deployment Modernization',
    challenge: 'Manual, slow, and error-prone validation and deployment processes limited the delivery speed of new features and fixes.',
    solution: 'I designed and implemented complete CI/CD pipelines, automating the build, unit testing, code quality analysis with SonarQube, and deployment stages across development and production environments.',
    impact: 'Achieved a significant increase in deployment frequency, over 80% reduction in release errors, and freed up the development team to focus on new features.',
    technologies: ['Jenkins', 'SonarQube','Docker', 'Kubernetes']
  },
  {
    title: 'End-to-End Observability Implementation',
    challenge: 'Lack of visibility into application health in production resulted in high Mean Time to Resolution (MTTR) and reactive problem discovery.',
    solution: 'I established a complete observability stack, configuring the collection of metrics, logs, and traces (with OpenTelemetry, Prometheus, Loki, and Tempo). I created Grafana dashboards for real-time visualization and set up proactive alerts with Alertmanager.',
    impact: 'Reduced MTTR by 50%, enabled proactive identification of anomalies and performance bottlenecks, and fostered a data-driven decision-making culture.',
    technologies: ['OpenTelemetry', 'Prometheus', 'Grafana', 'Loki', 'Tempo']
  },
  {
    title: 'GitOps Adoption for Configuration Management',
    challenge: 'Kubernetes application configurations were managed manually, leading to inconsistencies between environments and making it difficult to track changes.',
    solution: 'I introduced and automated Kubernetes configuration management using GitOps practices with ArgoCD. All infrastructure and application configurations became declarative and version-controlled in Git repositories.',
    impact: 'Ensured full consistency across environments, provided a complete audit trail of all changes, and accelerated deployment and rollback processes.',
    technologies: ['ArgoCD', 'Kubernetes', 'Git', 'Oracle Cloud Infrastructure (OCI)']
  },
  {
    title: 'Mentorship and Training in DevOps Fundamentals',
    challenge: 'The need to develop new talent with practical, up-to-date knowledge in core DevOps practices and tools, focusing on CI/CD application.',
    solution: 'I served as a mentor in the IT Talent Program, where I developed and conducted hands-on sessions. Students were trained in CI/CD implementations using GitHub Actions, essential Linux configurations, basic usage of GCP and Azure Cloud, and an introduction to Docker and Kubernetes for containerization and orchestration.',
    impact: 'Graduation of DevOps professionals who were market-ready, with several immediately securing positions in the industry. The class gained practical skills in automated deployment (CI/CD) and infrastructure management, successfully applying Pipeline and Infrastructure as Code concepts.',
    technologies: ['GitHub Actions', 'Linux', 'GCP', 'Azure', 'Docker', 'Kubernetes']
  }
];

function SuccessCases() {
  return (
    <section id="success-cases" className="success-cases-section">
      <div className="success-cases-container">
        <h2>Success Cases</h2>
        <div className="success-grid">
          {successCasesData.map((success, index) => (
            <div className="success-card" key={index}>
              <h3>{success.title}</h3>
              <div className="success-content">
                <h4>The Challenge</h4>
                <p>{success.challenge}</p>
                <h4>The Solution</h4>
                <p>{success.solution}</p>
                <h4>The Impact</h4>
                <p>{success.impact}</p>
              </div>
              <div className="success-tech">
                {success.technologies.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SuccessCases;
