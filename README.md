Git clone with custom ssh key

GIT_SSH_COMMAND='ssh -i ~/.ssh/tamhoang289' git clone git@github.com:tamhoang289/devops-fundamental.git

# git config: ~/.ssh/config
# devops-fundamental github
Host github.com
  HostName github.com
  User git
  IdentityFile ~/.ssh/tamhoang289
  IdentitiesOnly yes