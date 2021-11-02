# Lysn frontend monorepo
The project uses yarn workspaces.

## Setup
1. Node Version Manager
Install nvm following the instructions from link - https://github.com/nvm-sh/nvm

2. Node
Current node version of the project is saved in the .nvmrc file.
Run command below in the project root repository to activate node version.
```
nvm use
```
2. Yarn
Globally install yarn using command below.
```
npm install -g yarn@3.1.0
```


## Yarn workspaces

To list workspaces
```
yarn workspaces list
```

To run a command in a workspace
```
yarn workspace <workspace-name> <command>
```