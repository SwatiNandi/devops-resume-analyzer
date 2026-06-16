import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';

function ResumeUpload() {

    const [file, setFile] = useState(null);
    const [result, setResult] = useState(null);

    const handleUpload = async () => {

        if (!file) {
            alert("Please choose a resume");
            return;
        }

        const formData = new FormData();
        formData.append('resume', file);

        try {

            const response = await axios.post(
    'http://13.220.20.205:5000/api/upload/resume',
    formData,
    {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }
);

            setResult(response.data);

        } catch (error) {

            console.log(error);
            alert("Upload failed");

        }

    };

    return (

        <div className="app-shell">

            <nav className="navbar">
                <div className="brand">
                    <span>ATS Resume Analyzer</span>
                </div>
            </nav>

            <main className="main-content">

                <section className="hero">

                    <div className="hero-copy">

                        <span className="eyebrow">
                            AI Powered Resume Screening
                        </span>

                        <h1>
                            Analyze Your Resume Instantly
                        </h1>

                        <p>
                            Upload your resume and get ATS score,
                            matched skills, and screening insights
                            in seconds.
                        </p>

                        <div className="hero-actions">

                            <label
                                htmlFor="resumeInput"
                                className="choose-file-btn"
                            >
                                Choose File
                            </label>

                            <input
                                type="file"
                                id="resumeInput"
                                className="file-input"
                                onChange={(e) => setFile(e.target.files[0])}
                            />

                            <span className="selected-file-name">
                                {file ? file.name : "No file chosen"}
                            </span>

                            <button
                                className="upload-btn"
                                onClick={handleUpload}
                            >
                                Upload & Analyze
                            </button>

                        </div>

                        <div className="hello-world">
                            Hello World! Version 2
                        </div>

                    </div>

                    <div className="hero-card">

                        <div className="hero-stat">
                            <strong>90+</strong>
                            <span>ATS Compatibility Score</span>
                        </div>

                        <div className="hero-stat">
                            <strong>10+</strong>
                            <span>Matched Skills</span>
                        </div>

                    </div>

                </section>

                {

                    result && (

                        <section className="features">

                            <div className="feature-card">

                                <h2>
                                    ATS Score:
                                    {result.analysis["ATS Score"]}
                                </h2>

                            </div>

                            <div className="feature-card">

                                <h3>Matched Skills</h3>

                                <ul>

                                    {

                                        result.analysis["Matched Skills"].map(
                                            (skill, index) => (
                                                <li key={index}>
                                                    {skill}
                                                </li>
                                            )
                                        )

                                    }

                                </ul>

                            </div>

                        </section>

                    )

                }

            </main>

            <footer className="footer">
                Powered by React • Node.js • MongoDB • Docker • AWS
            </footer>

        </div>

    );

}

export default ResumeUpload;