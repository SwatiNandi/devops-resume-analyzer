from flask import Flask, request, jsonify
import pdfplumber

app = Flask(__name__)


@app.route('/analyze', methods=['POST'])

def analyze_resume():

    file = request.files['resume']

    text = ""

    with pdfplumber.open(file) as pdf:

        for page in pdf.pages:

            text += page.extract_text()


    keywords = ['python', 'java', 'react', 'mongodb', 'docker']

    score = 0

    matched_skills = []

    for skill in keywords:

        if skill.lower() in text.lower():

            score += 20
            matched_skills.append(skill)


    return jsonify({

        'ATS Score': score,
        'Matched Skills': matched_skills

    })


if __name__ == '__main__':

    app.run(host='0.0.0.0', port=7000, debug=True)