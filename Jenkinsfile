pipeline {

```
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

                bat """
                ssh -o StrictHostKeyChecking=no ubuntu@3.91.147.228 ^
                "cd ~/devops-resume-analyzer && \
                git pull origin main && \
                sudo docker compose down && \
                sudo docker compose up --build -d"
                """

            }

        }

    }

}
```

}
