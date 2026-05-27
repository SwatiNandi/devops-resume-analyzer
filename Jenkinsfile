pipeline {

    agent any

    stages {

        stage('Clone Repository') {

            steps {

                git branch: 'main',
                url: 'https://github.com/SwatiNandi/devops-resume-analyzer.git'

            }

        }

        stage('Docker Compose Build') {

            steps {

                bat 'docker compose down'
                bat 'docker compose up --build -d'

            }

        }

    }

}