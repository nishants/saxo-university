https://docs.microsoft.com/en-us/azure/devops/pipelines/agents/v2-linux?view=azure-devops



**React Static Website**

- [Create a pipline for react static website](01-create-a-pipeline.md)
  - Create an organization
  - Create a project
  - Create a pipeline
    - choose source code repo
    - create Yaml configuration
  - Commit on master, the build should run
- 



**Publishing artifacts**

- Lets instruct the azure to save the result of our build aka **Pipeline Artifacts**

  ```yaml
    - task: PublishPipelineArtifact@1
        inputs:
          path: $(Agent.BuildDirectory)/s/projects/react-static-website/build
          artifact: react-static-website-build-artifacts
  ```

- Now after the build is run, open the build result, we will see an option to view/download artifacts : 

  ![image-20191110115958567](/Users/dawn/Documents/projects/saxo-university/azure devops server/pipelines-and-builds/images/download-artifacts.png)



- If the build fails chech if there resource access requires authorization, click on **Authorize Resource ** and build again

![image-20191110121232065](/Users/dawn/Documents/projects/saxo-university/azure devops server/pipelines-and-builds/images/authorize-services-connection-for-resources.png)