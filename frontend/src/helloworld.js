function HelloWorld() {
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "50px",
        fontFamily: "Arial",
      }}
    >
      <h1>Hello World 🚀</h1>

      <h2>DevOps Resume Analyzer</h2>

      <p>
        CI/CD Pipeline Triggered Successfully
      </p>

      <button
        style={{
          padding: "12px 25px",
          backgroundColor: "blue",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Upload Resume
      </button>

      <p style={{ marginTop: "30px" }}>
      </p>
    </div>
  );
}

export default HelloWorld;