pipeline {

    agent any

    stages {

        stage('Clone Repository') {

            steps {

                git branch: 'main',
                url: 'https://github.com/SwatiNandi/devops-resume-analyzer.git'

            }

        }

        stage('Build Docker Containers') {

            steps {

                bat 'docker-compose build'

            }

        }

        stage('Run Docker Containers') {

            steps {

                bat 'docker-compose up -d'

            }

        }

    }

}