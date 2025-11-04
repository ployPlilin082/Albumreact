pipeline {
    agent any

    tools {
        nodejs 'NodeJs v22.19.0 (LTS)'
    }
    stages{
        stage('Checkout') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'GitHubPATReact', variable:'GIT_PAT')]) {
                    git url: "https://${GIT_PAT}@https://github.com/ployPlilin082/Albumreact.git", branch: 'main'
                }
            }
    }
    stage('Install Dependencies') {
    }
    stage('Build') {
    }
    stage('Build Docker Image') {
    }
    stage('Deploy') {
    }
     
     post {
        always {
            cleanWs()
        }
     }
}
}