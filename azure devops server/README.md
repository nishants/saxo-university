

Project homepage :[https://dev.azure.com/nishantsingh87/Learn%20Devops%20Server](https://dev.azure.com/nishantsingh87/Learn Devops Server)

Cheat sheet

|                       |                                                              |
| --------------------- | ------------------------------------------------------------ |
| Azure Devops Server   | on premise offering, with SQL based reporting (previously TFS) |
| Azure Devops Services | Hosted version of Azure Devops server with no SQL reporting support. (Previously VSTS : Visual Studio Team Services) |
| Agents                | Run Build/Deploy scripts on a host machine                   |



### Azure Devops Server

### Azure Devops Services



## Todo 

- Devops Server vs Devops services : 

- Git Branch policies: https://docs.microsoft.com/en-us/azure/devops/repos/git/pull-requests-overview?view=azure-devops
  - PR status server : https://docs.microsoft.com/en-us/azure/devops/repos/git/create-pr-status-server?view=azure-devops
  - Branch policy for external services : https://docs.microsoft.com/en-us/azure/devops/repos/git/pr-status-policy?view=azure-devops
  
    

- Made up of one or more stages
- Represent Devops workflow for a project (workflow that defines how your test, build, and deployment steps are run.)

### [Agents](00-intro-to-agents.md)

- Agents are **installable software** that can be hosted on cloud/on-premise machine (**self hosted agents**) or provided by MS (**Microsoft hosted agents**)
- The agents **listen to job queue** on Azure pipeline servers and **pull jobs when available**
- These can run CI jobs (**Build Agent**) or a deploy job (**Release Agent**)
- Use HTTP/HTTPS to communicate with Azure server or server to deploy to 
- Agent **runs only one task** at a time on host machine.



### Jobs

- Could involve **compiling, running unit tests, quality checks, deploying to a remote server etc.**
- Typically form a step in the pipeline

```
What are some of the jobs running in Saxotrader build pipleline ?

- running branchPolicy (prettier, unit test, lint)
- running cypress tests

Is checklist validation done via a job ?
```



## Step

- one logical unit of work in a Job
- can be a **script** or **a predefined task**
- 

### Piplelines

- Made up of one or more stages
- Represent Devops workflow for a project (workflow that defines how your test, build, and deployment steps are run.)



### Stages

- units of a pipeline
- marks logical boundaries like (test, QA, UAT, Release)





## Todo 

- Pipeline concepts : https://docs.microsoft.com/en-us/azure/devops/pipelines/get-started/key-pipelines-concepts?view=azure-devops
- Devops Server vs Devops services : 
- Branch Policies
  - Git Branch policies: https://docs.microsoft.com/en-us/azure/devops/repos/git/pull-requests-overview?view=azure-devops
  - PR status server : https://docs.microsoft.com/en-us/azure/devops/repos/git/create-pr-status-server?view=azure-devops
  - Branch policy for external services : https://docs.microsoft.com/en-us/azure/devops/repos/git/pr-status-policy?view=azure-devops
  - 



# Labwork 

- Create checklist for a PULL request
- Create branch policy for a project
- Create external checks for PULL REQUESTS 
- Create stages (test, QA deploy, manual release deploy)

