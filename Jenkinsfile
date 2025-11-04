pipeline {
    agent any

    tools {
        nodejs 'NodeJs v22.19.0 (LTS)'
    }

    environment {
        SONARQUBE_ENV = 'SonarQube'
    }

    stages {

        stage('SonarQube Analysis') {
            steps {
                script {
                    def scannerHome = tool 'SonarQubeScanner'
                    withCredentials([string(credentialsId: 'SONAR_TOKEN', variable: 'SONAR_TOKEN')]) {
                        withSonarQubeEnv("${SONARQUBE_ENV}") {
                            sh """
                                echo "Running SonarQube Analysis..."
                                ${scannerHome}/bin/sonar-scanner \
                                -Dsonar.sources=src \
                                -Dsonar.javascript.lcov.reportPaths=coverage/lcov.info \
                                -Dsonar.login=${SONAR_TOKEN}
                            """
                        }
                    }
                }
            }
        }

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
                    docker run -d --name react-app -p 4080:80 albumreact:latest
                '''
            }
        }
    }

    post {
        always {
            echo 'Cleaning workspace...'
            cleanWs()
        }
        success {
            echo '✅ Build and Deploy completed successfully!'
        }
        failure {
            echo '❌ Build failed. Check the logs for more details.'
        }
    }
}
