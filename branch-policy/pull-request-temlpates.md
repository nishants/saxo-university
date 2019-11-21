### Pull request templates 

- refer https://docs.microsoft.com/en-us/azure/devops/repos/git/pull-request-templates?view=azure-devops
- defined as markdown
- three types
  - default template
  - branch specific templates
  - additional/optional templates

- **Default pull request template**

  - name it `pull_request_template.md` or `pull_request_template.txt` 
  - save in folder 
    - `.azuredevops`, or
    - `.vst`s, or
    - `docs`
  - the folder must be checked into the default branch

  

### Create a repository in Azure

- open project

- go to repository 

- click on **Import** under heading import a repository

  ![image-20191120131949724](/Users/dawn/Documents/projects/saxo-university/branch-policy/images/imoprt-repo.png)

- Enter github repository URL and click import

  ![image-20191120132123827](/Users/dawn/Documents/projects/saxo-university/branch-policy/images/import-from-github-url.png)

- 



![image-20191120132335585](/Users/dawn/Documents/projects/saxo-university/branch-policy/images/create-pr-template.png)

- 

- Add the template text and commit

  ```markdown
  Before submitting this PR, please make sure:
  
  - [ ] You have read the coding standars and guidelines
  - [ ] You are using approved terminology
  - [ ] You have added unit tests
  ```

  

  ![image-20191120132527778](/Users/dawn/Documents/projects/saxo-university/branch-policy/images/edit-default-pr-template.png)



- commit to master.

- Now when you create a new pull request you will see description like

  ![image-20191120133409074](/Users/dawn/Documents/projects/saxo-university/branch-policy/images/pr-template-based-desc.png)

- Now you can click on checkbox to check/uncheck, which is retained on page refresh

- ![image-20191120133409074](/Users/dawn/Documents/projects/saxo-university/branch-policy/images/pr-template-checkboxgif.gif)