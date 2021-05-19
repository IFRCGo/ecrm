## Epidemic Control for Response Managers (ECRM)



## Development environment

- Developed using Ruby v2.7.2 and Node v14.15.4
  - Suggested to install [Node Version Manager](https://github.com/nvm-sh/nvm) and [RVM](https://rvm.io/)
  - Run `nvm use` and `rvm use`
- `npm install` (will automatically run `bundle install` as well)
- `npm install -g gulp`
- To run a test server: `gulp serve`

## Production

For the Travis-CI connection, a GitHub personal access token with 'public_repo - Access public repositories' permissions created and added via `travis encrypt GH_TOKEN=my_github_token --add env.matrix` as described in the [Travis-CI docs](https://docs.travis-ci.com/user/environment-variables#Encrypting-environment-variables). Note: you'll need to run `npm install -g travis-cli` first.