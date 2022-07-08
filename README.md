oclif-hello-world
=================

oclif example Hello World CLI

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
$ npm install -g ds-gen
$ outline COMMAND
running command...
$ outline (--version)
ds-gen/0.0.0 darwin-x64 node-v14.16.0
$ outline --help [COMMAND]
USAGE
  $ outline COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`outline generate story NAME`](#outline-generate-story-name)
* [`outline hello PERSON`](#outline-hello-person)
* [`outline hello world`](#outline-hello-world)
* [`outline help [COMMAND]`](#outline-help-command)
* [`outline plugins`](#outline-plugins)
* [`outline plugins:install PLUGIN...`](#outline-pluginsinstall-plugin)
* [`outline plugins:inspect PLUGIN...`](#outline-pluginsinspect-plugin)
* [`outline plugins:install PLUGIN...`](#outline-pluginsinstall-plugin-1)
* [`outline plugins:link PLUGIN`](#outline-pluginslink-plugin)
* [`outline plugins:uninstall PLUGIN...`](#outline-pluginsuninstall-plugin)
* [`outline plugins:uninstall PLUGIN...`](#outline-pluginsuninstall-plugin-1)
* [`outline plugins:uninstall PLUGIN...`](#outline-pluginsuninstall-plugin-2)
* [`outline plugins update`](#outline-plugins-update)

## `outline generate story NAME`

Generates a Storybook story using the custom-elements.json file.

```
USAGE
  $ outline generate story [NAME] [-f] [-o <value>] [-p <value>] [-c <value>]

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
  $ outline generate story
```

## `outline hello PERSON`

Say hello

```
USAGE
  $ outline hello [PERSON] -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Whom is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/mabry1985/ds-gen/blob/v0.0.0/dist/commands/hello/index.ts)_

## `outline hello world`

Say hello world

```
USAGE
  $ outline hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ oex hello world
  hello world! (./src/commands/hello/world.ts)
```

## `outline help [COMMAND]`

Display help for outline.

```
USAGE
  $ outline help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for outline.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.10/src/commands/help.ts)_

## `outline plugins`

List installed plugins.

```
USAGE
  $ outline plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ outline plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.0.11/src/commands/plugins/index.ts)_

## `outline plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ outline plugins:install PLUGIN...

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
  $ outline plugins add

EXAMPLES
  $ outline plugins:install myplugin 

  $ outline plugins:install https://github.com/someuser/someplugin

  $ outline plugins:install someuser/someplugin
```

## `outline plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ outline plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ outline plugins:inspect myplugin
```

## `outline plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ outline plugins:install PLUGIN...

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
  $ outline plugins add

EXAMPLES
  $ outline plugins:install myplugin 

  $ outline plugins:install https://github.com/someuser/someplugin

  $ outline plugins:install someuser/someplugin
```

## `outline plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ outline plugins:link PLUGIN

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
  $ outline plugins:link myplugin
```

## `outline plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ outline plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ outline plugins unlink
  $ outline plugins remove
```

## `outline plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ outline plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ outline plugins unlink
  $ outline plugins remove
```

## `outline plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ outline plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ outline plugins unlink
  $ outline plugins remove
```

## `outline plugins update`

Update installed plugins.

```
USAGE
  $ outline plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
