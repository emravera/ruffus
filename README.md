# Ruffus Lib

This is a testing lib for frontend scalability.

### Main commands

As it uses https://lerna.js.org/ the main commands include:

```
lerna changed
```

To publish read the options available here:

https://github.com/lerna/lerna/tree/main/commands/publish#readme

```
lerna publish
```

To setup if has cross dependencies:

```
lerna bootstrap
```

## Libs components

1. Text
2. Button (Composed Element)

## Storybook

In order to test the components we have storybook in place.

```
npm run build-storybook
```

To run in localhost:

```
npm run storybook
```

This runs the server on the port 6006.
