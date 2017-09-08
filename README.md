# yn-cli
Dead simple CLI for prompting for confirmation to use in your npm scripts.

## Usage
`yarn install yn-cli`

_package.json_
```
{
  "scripts": {
    "foo": "yn && echo 'Yes'"
  }
}
```

Now when you run `yarn foo`, it will prompt you with `Are you sure? [y/N]`. If you press "y" and then the "return" key, it will execute the echo afterwards. If you enter anything else followed by the "return" key, then it will not execute the following echo command.

You can customize the prompt by passing it in as the first argument, example: `yn "You sure?"`