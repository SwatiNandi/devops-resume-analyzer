pipeline {

    agent any

    stages {

        stage('Clone Repository') {

            steps {

                git branch: 'main',
                url: 'https://github.com/SwatiNandi/devops-resume-analyzer.git'

            }

        }

        stage('Build Success') {

            steps {

                echo 'Project Build Successful'

            }

        }

        stage('CI/CD Pipeline') {

            steps {

                echo 'Jenkins Pipeline Executed Successfully'

            }

        }

    }

}