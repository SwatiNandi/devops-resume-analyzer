pipeline {

    agent any

    stages {

        stage('Clone Repository') {

            steps {

                git branch: 'main',
                url: 'https://github.com/SwatiNandi/devops-resume-analyzer.git'

            }

        }

        stage('Project Verification') {

            steps {

                echo 'GitHub Connected Successfully'
                echo 'Jenkins Pipeline Working'
                echo 'Dockerized ATS Resume Analyzer Ready'

            }

        }

    }

}