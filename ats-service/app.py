from flask import Flask, request, jsonify
import pdfplumber

app = Flask(__name__)


@app.route('/analyze', methods=['POST'])

def analyze_resume():

    try:

        file = request.files['resume']

        text = ""

        with pdfplumber.open(file) as pdf:

            for page in pdf.pages:

                extracted = page.extract_text()

                if extracted:
                    text += extracted.lower()


        skills = [

            'python',
            'java',
            'react',
            'mongodb',
            'docker',
            'aws',
            'jenkins'

        ]

        matched_skills = []

        for skill in skills:

            if skill in text:

                matched_skills.append(skill)


        ats_score = len(matched_skills) * 10

        return jsonify({

            "analysis": {

                "ATS Score": ats_score,

                "Matched Skills": matched_skills

            }

        })


    except Exception as e:

        return jsonify({

            "error": str(e)

        }), 500


if __name__ == '__main__':

    app.run(
        host='0.0.0.0',
        port=7000,
        debug=True
    )