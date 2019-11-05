Refer https://docs.microsoft.com/en-us/azure/devops/pipelines/agents/agents?view=azure-devops

### Agents

- it is an installable software
- that **runs one job at a time**
- job can run on a **host machine** or in a **container**
- by using containers, single machine can **host mulitple agents**
- Agents acan run on-premise or on  cloud 



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



**Agent communication with Azure Devops Pipelines**

- Agents communicate with Azure pipelines to find 
  - what **jobs to run,** 
  - report **status and logs**
- Communication is initiated by client via HTTP or HTTPS (depending on configuration)
- All communication is secured by using the **assymetric encryption.** The agent shares its **public key to server on registration** and therby server uses this key to send information to agent
- The communication steps are usually as 
  - **Registration** 
    - agent is added to agent poll by administrator
    - agent download **listener OAuth token** which allows it to ***poll*** for jobs in queue
  - **Triggering jobs**
    - when a job is available, agent downloads the job and **job speficif OAuth token**
    - the **job specific OAuth** token is used to **access resources (source code)** or **upload results**



**Line of sight**

- Agent must have **internect connectivity to connect with Azure pipelines**

- Also if agent runs deploy tasks, it should have a **line of sight connectivity with target servers**

  

![Agent connectivity for on-premises environments](/Users/dawn/Documents/projects/saxo-university/azure devops server/images/agent-line-of-sight.png)



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



**Classwork** : 

- view all agents and their capabilities (https://docs.microsoft.com/en-us/azure/devops/pipelines/agents/agents?view=azure-devops)
- Create a self hosted agent?



**References**

- YAML schema : https://docs.microsoft.com/en-us/azure/devops/pipelines/yaml-schema?view=azure-devops&tabs=schema

