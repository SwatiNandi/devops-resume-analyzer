pipeline {

    agent any

    stages {

        stage('Clone Repository') {

            steps {

                git branch: 'main',
                    url: 'https://github.com/SwatiNandi/devops-resume-analyzer.git'

            }

        }

        stage('Deploy to EC2') {

            steps {

                sshagent(['ec2-key']) {

                    sh '''
                    ssh -o StrictHostKeyChecking=no ubuntu@18.207.105.77 "
                    cd ~/devops-resume-analyzer &&
                    git pull origin main &&
                    sudo docker compose down &&
                    sudo docker compose up --build -d
                    "
                    '''

                }

            }

        }

    }

}