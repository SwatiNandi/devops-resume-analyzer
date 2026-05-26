import React, { useState } from 'react';
import axios from 'axios';

function ResumeUpload() {

    const [file, setFile] = useState(null);
    const [result, setResult] = useState(null);

    const handleUpload = async () => {

        const formData = new FormData();

        formData.append('resume', file);

        try {

            const response = await axios.post(

                'http://localhost:5000/api/upload/resume',

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

        }

    };

    return (

        <div style={{ padding: '30px' }}>

            <h1>ATS Resume Analyzer</h1>

            <input
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
            />

            <br /><br />

            <button onClick={handleUpload}>
                Upload Resume
            </button>

            <br /><br />

            {

                result && (

                    <div>

                        <h2>
                            ATS Score:
                            {result.analysis["ATS Score"]}
                        </h2>

                        <h3>Matched Skills:</h3>

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

                )

            }

        </div>

    );

}

export default ResumeUpload;