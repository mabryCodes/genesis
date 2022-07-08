Genesis CLI
=================

A CLI tool for generating Lit Element components, Storybook stories, and more!

@TODO - Readme 

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @mabry/genesis
$ dsgn-gnrtr COMMAND
running command...
$ dsgn-gnrtr (--version)
@mabry/genesis/0.0.0 darwin-x64 node-v14.16.0
$ dsgn-gnrtr --help [COMMAND]
USAGE
  $ dsgn-gnrtr COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`dsgn-gnrtr generate story NAME`](#dsgn-gnrtr-generate-story-name)
* [`dsgn-gnrtr help [COMMAND]`](#dsgn-gnrtr-help-command)
* [`dsgn-gnrtr plugins`](#dsgn-gnrtr-plugins)
* [`dsgn-gnrtr plugins:install PLUGIN...`](#dsgn-gnrtr-pluginsinstall-plugin)
* [`dsgn-gnrtr plugins:inspect PLUGIN...`](#dsgn-gnrtr-pluginsinspect-plugin)
* [`dsgn-gnrtr plugins:install PLUGIN...`](#dsgn-gnrtr-pluginsinstall-plugin-1)
* [`dsgn-gnrtr plugins:link PLUGIN`](#dsgn-gnrtr-pluginslink-plugin)
* [`dsgn-gnrtr plugins:uninstall PLUGIN...`](#dsgn-gnrtr-pluginsuninstall-plugin)
* [`dsgn-gnrtr plugins:uninstall PLUGIN...`](#dsgn-gnrtr-pluginsuninstall-plugin-1)
* [`dsgn-gnrtr plugins:uninstall PLUGIN...`](#dsgn-gnrtr-pluginsuninstall-plugin-2)
* [`dsgn-gnrtr plugins update`](#dsgn-gnrtr-plugins-update)

## `dsgn-gnrtr generate story NAME`

Generates a Storybook story using the custom-elements.json file.

```
USAGE
  $ dsgn-gnrtr generate story [NAME] [-f] [-o <value>] [-p <value>] [-c <value>]

ARGUMENTS
  NAME  name of component

FLAGS
  -c, --category=<value>  [default: Content] category for the story
  -f, --fullBleed         removes padding in story canvas, useful for testing full bleed components
  -o, --output=<value>    category for the story, defaults to the same path as the component
  -p, --path=<value>      path to custom-elements.json. Defaults to '../src/custom-elements.json'

DESCRIPTION
  Generates a Storybook story using the custom-elements.json file.

EXAMPLES
  $ dsgn-gnrtr generate story
```

## `dsgn-gnrtr help [COMMAND]`

Display help for dsgn-gnrtr.

```
USAGE
  $ dsgn-gnrtr help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for dsgn-gnrtr.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.10/src/commands/help.ts)_

## `dsgn-gnrtr plugins`

List installed plugins.

```
USAGE
  $ dsgn-gnrtr plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ dsgn-gnrtr plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.0.11/src/commands/plugins/index.ts)_

## `dsgn-gnrtr plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ dsgn-gnrtr plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ dsgn-gnrtr plugins add

EXAMPLES
  $ dsgn-gnrtr plugins:install myplugin 

  $ dsgn-gnrtr plugins:install https://github.com/someuser/someplugin

  $ dsgn-gnrtr plugins:install someuser/someplugin
```

## `dsgn-gnrtr plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ dsgn-gnrtr plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ dsgn-gnrtr plugins:inspect myplugin
```

## `dsgn-gnrtr plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ dsgn-gnrtr plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ dsgn-gnrtr plugins add

EXAMPLES
  $ dsgn-gnrtr plugins:install myplugin 

  $ dsgn-gnrtr plugins:install https://github.com/someuser/someplugin

  $ dsgn-gnrtr plugins:install someuser/someplugin
```

## `dsgn-gnrtr plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ dsgn-gnrtr plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLES
  $ dsgn-gnrtr plugins:link myplugin
```

## `dsgn-gnrtr plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ dsgn-gnrtr plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ dsgn-gnrtr plugins unlink
  $ dsgn-gnrtr plugins remove
```

## `dsgn-gnrtr plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ dsgn-gnrtr plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ dsgn-gnrtr plugins unlink
  $ dsgn-gnrtr plugins remove
```

## `dsgn-gnrtr plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ dsgn-gnrtr plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ dsgn-gnrtr plugins unlink
  $ dsgn-gnrtr plugins remove
```

## `dsgn-gnrtr plugins update`

Update installed plugins.

```
USAGE
  $ dsgn-gnrtr plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
