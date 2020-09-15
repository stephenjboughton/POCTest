# Creating Angular Libraries and publishing them within github package registry

This guide: https://medium.com/@brgrz/create-a-library-with-angular-and-publish-it-to-github-package-registry-c8184193b993 is pretty good, but there are a few tricks to be aware of.

### Command line parameters
All ng command line commands that have parameters require "--" even if it only shows a single dash, for example:
```ng g library ComponentsLib -prefix cmpts```
should actually be
```ng g library ComponentsLib --prefix cmpts```

### Build successfully without Ivy
Before running ng build, add kvp to tsconfig.lib.json to avoid using Ivy:
```
"angularCompilerOptions": {
    "skipTemplateCodegen": true,
    "strictMetadataEmit": true,
    "enableResourceInlining": true,
    "enableIvy": false
  },
```

### Push the workspace as a repo before Build and ensure agreement with repository node in package.json
When adding the "repository" node to the library-level package.json file, make sure the node looks like this:
```
    "repository": {
        "type": "git",
        "url": https://github.com/OWNER/REPOSITORY”
      }
```
And be sure the REPOSITORY name appended to the url matches the name of the repo you pushed for the workspace (not the name of the library/package itself)
This url should not start with git and end with .git as suggested int he article (in our experience)

### Build from the right directory level
In step 8 make sure you run ng build from within the projects/<library> directory, not just the workspace

