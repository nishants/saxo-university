

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



**Artifacts**

- These are the outputs of a build job.
- These can be used to shared files between
  - stages, or
  - pipelines
- These remain available after the build is completed



**Triggers**

- by default the YAML build runs for all branches (unless specified otherwise)

- create and push new branch a new branch `test-build-branch`, make a commit, the build will not run

- run build on creating new branch

- **Branch triggers**

  - batches (run changes in batch)
  - branches wildcard (run for release/*)
  - skip pipeline build for a commit (`***NO_CI***`or `[skip ci]` in commit message)

- **Pull Request tirggers**

  - by default every pull request triggers a build

  - YAML PR triggers only work for `github` and `bitbucket`

  - For **`Azure` git repos, we need to configure the `branch policy`**

  - Following config will make only PR against master and release branches to trigger a build

    ```yaml
    pr:
    - master
    - releases/*
    ```



**Artifacts**

- **Pipeline Artifacts** allow output of a build (files) to be consumed by other build/release tasks

- These are typically consumed by 

  - tests ( to validate artifacts)
  - release (to deploy bundled/compiled code/packages to servers)

- Example to publish artifacts :

  ```yaml
    - task: PublishPipelineArtifact@1
        inputs:
          path: $(Agent.BuildDirectory)/s/projects/react-static-website/build
          artifact: react-static-website-build-artifacts
  ```

- Example to download artifacts from a build

  ```yaml
  steps:
  - task: DownloadPipelineArtifact@2
    inputs:
      artifact: react-static-website-build-artifacts
  ```

  



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

