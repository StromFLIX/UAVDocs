

<p align="center" >
  <img src="static/img/repo_logo.png" width="50%">
</p>
<p align="center">
    Something between an artificial, infinitely flying duck living in the wild and an ostrich ramming its head into the ground.
</p>
<p align="center">
  <a href="https://github.com/ArzelaAscoIi/UAVDocs/actions/workflows/deploy.yaml" style="text-decoration:none;"><img src="https://github.com/ArzelaAscoIi/UAVDocs/actions/workflows/deploy.yaml/badge.svg" alt="documentation"></a>
</p>

# Motivation


This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

### Installation
```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

```
$ GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

### Continuous Integration

Some common defaults for linting/formatting have been set for you. If you integrate your project with an open source Continuous Integration system (e.g. Travis CI, CircleCI), you may check for issues using the following command.

```
$ yarn ci
```
