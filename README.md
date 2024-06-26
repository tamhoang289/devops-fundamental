Git clone with custom ssh key

GIT_SSH_COMMAND='ssh -i ~/.ssh/tamhoang289' git clone git@github.com:tamhoang289/devops-fundamental.git

# git config: ~/.ssh/config
# devops-fundamental github
Host github.com
  HostName github.com
  User git
  IdentityFile ~/.ssh/tamhoang289
  IdentitiesOnly yes

---------------------------------------
### Exercise Overview

**Objective**: Implement a complete CI/CD pipeline using GitHub Actions, including infrastructure provisioning with Terraform, security integration, containerization, and deployment to AWS.

**Tasks**:

1. **Set Up GitHub Repository**
2. **Write Dockerfiles for Frontend and Backend**
3. **Create Terraform Configurations**
4. **Configure GitHub Actions for CI/CD**
5. **Integrate DevSecOps Practices**
6. **Deploy to AWS EC2 and RDS**
7. **Set Up Monitoring and Logging**

---------------------------------------
### 1. Set Up GitHub Repository

- **Create Repository**:
    - Create a new repository on GitHub for your project.
    - Clone the repository to your local machine.
- **Initialize Project Structure**:
    - Create directories for frontend, backend, and infrastructure:
├── frontend/
├── backend/
└── infrastructure/

- **Build and Run frontend on localhost**:
docker build -t frontend:latest .

docker run -p 3000:3000 frontend:latest

- **Start the database server on localhost**:
docker run --name mysql-server -e MYSQL_ROOT_PASSWORD=password -e MYSQL_DATABASE=mydb -e MYSQL_USER=admin -e MYSQL_PASSWORD=password -p 13306:3306 -d mysql:8.0

- **Build and Run backend on localhost**:
docker build -t backend:latest .

docker run --name backend-server --env-file .env -p 5000:5000 backend:latest


