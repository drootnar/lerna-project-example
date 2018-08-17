# Lerna project example

Skeleton of lerna project with docker, tooling etc.

# Development

Run with async python console: `docker-compose run executor <command>`

where `command`:
- `yarn lerna:install` install deps
- `yarn lerna:test` tests all packages
- `yarn lerna:build` build packages if can be built
- `yarn lerna:lint` linter
- `yarn lerna:lint:fix` linter fix
- `yarn lerna:coverage` runs coverage report
- `yarn prepublish` prepares packages versions
- `lerna run <command> --scope <package_name>` runs command for certain package


# Attribution


Core code is licensed under LGPLv3.
