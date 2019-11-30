refer : https://docs.microsoft.com/en-us/azure/devops/repos/git/pull-requests-overview?view=azure-devops



**For code hosted in Microsoft Azure Only**

- Protected branch
  - any push to such a branch will be rejected
  - users can only create PRs against these



### Things to know

- create pull request template by branch type
- having checklist for a pull request
- status server 
  - listen to pull request
  - set status
  - have multiple checks
  - do not allow merge till all checks are finished



- [Creating pull request templates](./pull-request-temlpates.md)



### Creating pull request status server

- for custom pull request workflow
- create a web server with following routes
  - 