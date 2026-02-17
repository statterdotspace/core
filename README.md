# Statter Core

Shared tooling presets for JavaScript/TypeScript projects:

- `@statter/eslint` - ESLint flat config for Node + TypeScript + Prettier
- `@statter/prettier` - opinionated Prettier config
- `@statter/tsconfig` - reusable TypeScript configs for Node and React

## Packages

| Package | Purpose |
| --- | --- |
| `@statter/eslint` | Linting rules with `typescript-eslint` and Prettier integration |
| `@statter/prettier` | Single source of formatting rules |
| `@statter/tsconfig` | Base TS presets (`node`, `react`) |

## Quick Start

Install only what you need:

```bash
yarn add -D @statter/eslint @statter/prettier @statter/tsconfig
```

### ESLint

Create `eslint.config.mjs`:

```js
import config from "@statter/eslint"

export default config
```

### Prettier

Create `prettier.config.mjs`:

```js
import { prettier } from "@statter/prettier"

export default prettier
```

### TypeScript

For Node (`tsconfig.json`):

```json
{
  "extends": "@statter/tsconfig/tsconfig.node.json"
}
```

For React (`tsconfig.json`):

```json
{
  "extends": "@statter/tsconfig/tsconfig.react.json"
}
```

## Development

This repository is a Yarn workspaces monorepo:

```bash
yarn install
yarn workspace @statter/eslint build
yarn workspace @statter/prettier build
```

## License

MIT
