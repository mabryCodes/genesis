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
$ genesis COMMAND
running command...
$ genesis (--version)
@mabry/genesis/0.0.0 darwin-x64 node-v14.16.0
$ genesis --help [COMMAND]
USAGE
  $ genesis COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`genesis generate component NAME`](#genesis-generate-component-name)
* [`genesis generate story NAME`](#genesis-generate-story-name)
* [`genesis help [COMMAND]`](#genesis-help-command)
* [`genesis plugins`](#genesis-plugins)
* [`genesis plugins:install PLUGIN...`](#genesis-pluginsinstall-plugin)
* [`genesis plugins:inspect PLUGIN...`](#genesis-pluginsinspect-plugin)
* [`genesis plugins:install PLUGIN...`](#genesis-pluginsinstall-plugin-1)
* [`genesis plugins:link PLUGIN`](#genesis-pluginslink-plugin)
* [`genesis plugins:uninstall PLUGIN...`](#genesis-pluginsuninstall-plugin)
* [`genesis plugins:uninstall PLUGIN...`](#genesis-pluginsuninstall-plugin-1)
* [`genesis plugins:uninstall PLUGIN...`](#genesis-pluginsuninstall-plugin-2)
* [`genesis plugins update`](#genesis-plugins-update)

## `genesis generate component NAME`

describe the command here

```
USAGE
  $ genesis generate component [NAME] [-b <value>] [-f] [-n <value>]

ARGUMENTS
  NAME  name of component

FLAGS
  -b, --baseClass=<value>  [default: LitElement] name of base class to inherit from
  -f, --force
  -n, --nameSpace=<value>  name space for the component. defaults to the base name used for the component

DESCRIPTION
  describe the command here

EXAMPLES
  $ genesis generate component
```

## `genesis generate story NAME`

Generates a Storybook story using the custom-elements.json file.

```
USAGE
  $ genesis generate story [NAME] [-f] [-o <value>] [-p <value>] [-c <value>] [-n <value>]

ARGUMENTS
  NAME  name of component

FLAGS
  -c, --category=<value>            [default: Content] category for the story
  -f, --fullBleed                   allow the component to expand to the full width and height of the Storybook Canvas
  -n, --nameSpace=<value>           name space for the component. defaults to the base name used for the component
  -o, --output=<value>              category for the story, defaults to the same path as the component
  -p, --customElementsPath=<value>  path to custom-elements.json. overrides config setting

DESCRIPTION
  Generates a Storybook story using the custom-elements.json file.

EXAMPLES
  $ genesis generate story
```

## `genesis help [COMMAND]`

Display help for genesis.

```
USAGE
  $ genesis help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for genesis.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.10/src/commands/help.ts)_

## `genesis plugins`

List installed plugins.

```
USAGE
  $ genesis plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ genesis plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.0.11/src/commands/plugins/index.ts)_

## `genesis plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ genesis plugins:install PLUGIN...

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
  $ genesis plugins add

EXAMPLES
  $ genesis plugins:install myplugin 

  $ genesis plugins:install https://github.com/someuser/someplugin

  $ genesis plugins:install someuser/someplugin
```

## `genesis plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ genesis plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ genesis plugins:inspect myplugin
```

## `genesis plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ genesis plugins:install PLUGIN...

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
  $ genesis plugins add

EXAMPLES
  $ genesis plugins:install myplugin 

  $ genesis plugins:install https://github.com/someuser/someplugin

  $ genesis plugins:install someuser/someplugin
```

## `genesis plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ genesis plugins:link PLUGIN

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
  $ genesis plugins:link myplugin
```

## `genesis plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ genesis plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ genesis plugins unlink
  $ genesis plugins remove
```

## `genesis plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ genesis plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ genesis plugins unlink
  $ genesis plugins remove
```

## `genesis plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ genesis plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ genesis plugins unlink
  $ genesis plugins remove
```

## `genesis plugins update`

Update installed plugins.

```
USAGE
  $ genesis plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
