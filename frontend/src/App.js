import { useState } from 'react';
import './App.css';

function App() {
  const [resumeName, setResumeName] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      setResumeName(file.name);
    }
  };

  return (
    <div className="app-shell">
      <nav className="navbar">
        <div className="brand">
          <span>DevOps Resume Analyzer</span>
        </div>
      </nav>

      <main className="main-content">
        <section className="hero">
          <div className="hero-copy">
            <span className="eyebrow">Smart hiring for DevOps teams</span>
            <h1>AI resume analysis made simple</h1>
            <p>
              Upload your resume to discover skill insights, technical fit, and DevOps readiness in seconds.
            </p>
            <div className="hero-actions">
              <label htmlFor="resumeUpload" className="upload-btn">
                Choose Resume
              </label>
              <input
                id="resumeUpload"
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                className="file-input"
              />
              {resumeName && <div className="file-hint">Selected file: {resumeName}</div>}
            </div>
          </div>

          <div className="hero-card">
            <div className="hero-stat">
              <strong>98%</strong>
              <span>Accuracy in skill matching</span>
            </div>
            <div className="hero-stat">
              <strong>3 sec</strong>
              <span>Instant resume insights</span>
            </div>
            <div className="hero-stat">
              <strong>DevOps</strong>
              <span>Pipeline-ready evaluation</span>
            </div>
          </div>
        </section>

        <section className="features">
          <div className="card feature-card">
            <h3>Resume Analysis</h3>
            <p>Extract key skills, certifications, and experience automatically.</p>
          </div>
          <div className="card feature-card">
            <h3>Skill Detection</h3>
            <p>Identify strengths in cloud, CI/CD, automation, and infrastructure.</p>
          </div>
          <div className="card feature-card">
            <h3>Pipeline Insights</h3>
            <p>See how resumes align with Jenkins, Docker, and modern DevOps workflows.</p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>Frontend contribution by Ratnamala</p>
      </footer>
    </div>
  );
}

export default App;