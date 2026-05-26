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

                sh 'docker-compose build'

            }

        }

        stage('Run Docker Containers') {

            steps {

                sh 'docker-compose up -d'

            }

        }

    }

}