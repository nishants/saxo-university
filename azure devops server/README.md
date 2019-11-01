Offcial docs : https://docs.microsoft.com/en-us/azure/devops/pipelines/get-started/key-pipelines-concepts?view=azure-devops

Project homepage :[https://dev.azure.com/nishantsingh87/Learn%20Devops%20Server](https://dev.azure.com/nishantsingh87/Learn Devops Server)



Cheat sheet

| Agent |      |      |
| ----- | ---- | ---- |
|       |      |      |
|       |      |      |
|       |      |      |



##1. Choose an image or create custom machine to run a job - A

### Agents

- it is an installable software
- that **runs one job at a time**
- job can run on a **host machine** or in a **container**
- by using containers, single machine can **host mulitple agents**



### Jobs

- Could involve
  - compiling
  - running unit tests, quality checks
  - deploying to a remote server
  - etc.
- Typically form a step in the pipeline

```
What are some of the jobs running in Saxotrader build pipleline ?

- running branchPolicy (prettier, unit test, lint)
- running cypress tests
- 

Is checklist validation done via a job ?
```



**Microsoft hosted agents**

- every run of pipeline gets a fresh VM (one time use)
- think of Travis CI, gitlab
- auto updates (which can be a bad thing a lots of time, as it might break the job)



**Self hosted agents**

- (not necessarily a physical machine on client's premises)
- These are hosted in Azure pipelines
- These can be full controlled and configured 
- machine level cache and configuration can persist
  - hence can boost performance
- think of a reserved S3 instance
- Azure pipeline supports MacOS, Windows, Linux and Docker containers to host agents



**Capabilities for self hosted agents**

- apply only to **hosted agents**
- are **name-value** pairs
- indicates what an agent can do
  - **system capabilities** auto discoverd by hosted agents
    - e.g OS, machine name, versions of s/w, environment variables
  - **user defined capablities** defined by user
- capabilites are updated only after the agent is restarted after installation of the new software



**Demands for self hosted agents in pipelines**

- While defining the pipelines, we must defined the demanded capabilites from the agent
- The pipelines system sends jobs only to the agent that meets the demand of the job.
- demands do not apply to MS hosted agents, for which user must select an image.



**Question**

- What are the adwantages of self hosted agents over MS hosted agents ?
  - <span style="color: rgba(0,0,0,0.1)">reuse cache, setup apps/scripts that are not present in any of images for MS hosted agents </span>
- Does capabilites apply to MS hosted agents ?
- Is environment variable a system capability or user defined ?
- How many jobs can be run by an agent at once ?
- Can a physical machine host more than one agent at a time?
  - <span style="color: rgba(0,0,0,0.1)">by using agents installed inside containers</span>
- For an agent using MS pipeline, a dependecy fails to install all of a sudden. What could be reason for such inconsistent behavior ?
  - <span style="color: rgba(0,0,0,0.1)">MS hosted agents are maintaned and auto updated by MS. The updated could have made agent incompatible to the job running on it </span>
- 



**Classwork** : 

- view all agents and their capabilities (https://docs.microsoft.com/en-us/azure/devops/pipelines/agents/agents?view=azure-devops)
- 



**References**

- YAML schema : https://docs.microsoft.com/en-us/azure/devops/pipelines/yaml-schema?view=azure-devops&tabs=schema
- 