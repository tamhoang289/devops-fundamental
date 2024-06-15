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
### 1. Set Up GitHub Repository

- **Create Repository**:
    - Create a new repository on GitHub for your project.
    - Clone the repository to your local machine.
- **Initialize Project Structure**:
    - Create directories for frontend, backend, and infrastructure:
├── frontend/
├── backend/
└── infrastructure/

- **Build and Run frontend on local**:
docker build -t frontend:latest .

docker run -p 3000:3000 frontend:latest




