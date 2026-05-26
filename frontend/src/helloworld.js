function HelloWorld() {
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "80px",
        fontFamily: "Arial",
      }}
    >
      <h1>Hello World 🚀</h1>

      <h2>DevOps Resume Analyzer</h2>

      <p>
        CI/CD Pipeline Triggered Successfully using Jenkins,
        Docker and GitHub Integration.
      </p>

      <button
        style={{
          padding: "12px 25px",
          backgroundColor: "#0d6efd",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          marginTop: "20px",
        }}
      >
        Upload Resume
      </button>

      <div
        style={{
          marginTop: "40px",
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            width: "220px",
            padding: "20px",
            backgroundColor: "#f4f4f4",
            borderRadius: "10px",
            boxShadow: "0px 2px 8px rgba(0,0,0,0.1)",
          }}
        >
          <h3>Resume Analysis</h3>
          <p>Analyze resumes using AI techniques.</p>
        </div>

        <div
          style={{
            width: "220px",
            padding: "20px",
            backgroundColor: "#f4f4f4",
            borderRadius: "10px",
            boxShadow: "0px 2px 8px rgba(0,0,0,0.1)",
          }}
        >
          <h3>Skill Detection</h3>
          <p>Identify technical and soft skills automatically.</p>
        </div>

        <div
          style={{
            width: "220px",
            padding: "20px",
            backgroundColor: "#f4f4f4",
            borderRadius: "10px",
            boxShadow: "0px 2px 8px rgba(0,0,0,0.1)",
          }}
        >
          <h3>DevOps Pipeline</h3>
          <p>Integrated with Jenkins and Docker deployment.</p>
        </div>
      </div>

      <footer
        style={{
          marginTop: "50px",
          backgroundColor: "#212529",
          color: "white",
          padding: "15px",
        }}
      >
        Frontend Contribution by Ratnamala
      </footer>
    </div>
  );
}

export default HelloWorld;