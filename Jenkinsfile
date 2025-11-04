pipeline {
    agent any

    tools {
        nodejs 'NodeJs v22.19.0 (LTS)'
    }
    stages{
        
        /*stage('Checkout') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'GitHubPATReact', variable:'GIT_PAT')]) {
                    git url: "https://${GIT_PAT}@https://github.com/ployPlilin082/Albumreact.git", branch: 'main'
                }
            }
    }*/

    stage('Install Dependencies') {
        steps {
            sh 'npm install'
        }
    }
    stage('Build') {
        steps {
            sh 'npm run build'
        }
    }
    stage('Build Docker Image') {
        steps {
            script {
                sh '''
                echo "Building Docker Image..."
                docker build -t albumreact:latest .
                '''
            }
        }
    }
    stage('Deploy') {
        steps {
            sh '''
            echo "Deploying Docker Container..."
            docker stop react-app || true
            docker rm react-app || true
            docker run -d --name react-app -p 4080:80 my-react-app
            '''
        }
    }
     
     post {
        always {
            cleanWs()
        }
     }
}
}