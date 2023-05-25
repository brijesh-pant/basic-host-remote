# Basic One-Way Example

This example demos a basic host application loading remote components.

- `host` is the host application.
- `shared` standalone application which exposes `Button`, `Heading`, and `Input` component.
- `appTokens` standalone application is another micro app importing `shared` exposed components

The `shared` app is versioned with semantic versioning and published as an `npm` module https://www.npmjs.com/package/basic-host-remote_shared

# Running Demo

Run `npm start`. This will build and serve both `host`, `shared` and `appTokens` on ports 3001, 3002 and 3003 respectively.

- [localhost:3001](http://localhost:3001/) (HOST)
- [localhost:3002](http://localhost:3002/) (STANDALONE SHARED APP)
- [localhost:3003](http://localhost:3003/) (STANDALONE APP TOKENS)

<img src="https://ssl.google-analytics.com/collect?v=1&t=event&ec=email&ea=open&t=event&tid=UA-120967034-1&z=1589682154&cid=ae045149-9d17-0367-bbb0-11c41d92b411&dt=ModuleFederationExamples&dp=/email/BasicRemoteHost">
