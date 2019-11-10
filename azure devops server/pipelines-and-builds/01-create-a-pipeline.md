1. Signin to `azure.dev.com` (n.ishantsingh87@gmail.com)

2. Go to create free pipleine

3. Create an organization

   ![image-20191108214527100](/Users/dawn/Documents/projects/saxo-university/azure devops server/pipelines-and-builds/images/create-organization.png)

   

4. Create a project
  ![image-20191108214637075](/Users/dawn/Documents/projects/saxo-university/azure devops server/pipelines-and-builds/images/create-project.png)

5. Go to pipeline, and click on **new pipeline**

6. Choose github as source code repository 

   ![image-20191108215015138](/Users/dawn/Documents/projects/saxo-university/azure devops server/pipelines-and-builds/images/choose-source-repo.png)

 

7. After Oauth with GitHub, choose the repository **(saxo-university)**

8. Choose the starter pipeline for configuration options

   ![image-20191108215301965](/Users/dawn/Documents/projects/saxo-university/azure devops server/pipelines-and-builds/images/starter-pipeline.png) 



9. Now we can edit teh starter pipeline boilerplate

   ![image-20191108215355000](/Users/dawn/Documents/projects/saxo-university/azure devops server/pipelines-and-builds/images/stater-pipeline-boilerplate.png)



10. Edit the pipeline yam to create three task (as scripts)

    - yarn install

    - yarn lint

    - yarn build

      ```yaml
      # This sets trigger to any update in master  
      # if not mentioned, it will run for all branches
      trigger:
      - master
      
      #  Defines the host for agent (MS hosted)
      pool:
        vmImage: 'ubuntu-latest'
      
      #  Build steps for the pipeline
      steps:
      - script: yarn 
        workingDirectory: $(Agent.BuildDirectory)/s/projects/react-static-website
        displayName: 'Installing node modules'
      
      - script: yarn lint
        workingDirectory: $(Agent.BuildDirectory)/s/projects/react-static-website
        displayName: 'Checking for lint errors'
      
      - script: |
          yarn build
        workingDirectory: $(Agent.BuildDirectory)/s/projects/react-static-website
        displayName: 'Running webpack build'
      
      
      ```

      

11. Select the yaml path in repository, this will be saved in repo on commit 

    ![image-20191108220006270](/Users/dawn/Documents/projects/saxo-university/azure devops server/pipelines-and-builds/images/set-build-yaml-path.png)



Define work directory for all steps : https://github.com/MicrosoftDocs/vsts-docs/issues/6315



12. Click on save and run, choose to commit changes in master branch.



Good to know : 

- optimum npm build script with cache : https://github.com/microsoft/azure-pipelines-tasks/issues/11011