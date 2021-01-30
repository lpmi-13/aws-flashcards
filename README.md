# AWS Flashcards

Has this ever happened to you...???

You are in charge of an AWS environment with a whole bunch of _stuff_ in it...but you don't really know what most of it is, what it does, or why it exists?

This is a NextJS app to statically generate some flashcards to you can quiz yourself and hopefully learn more about what's in there.

## Getting up and running

```bash
npm install && npm start
```

when you're ready to generate a build to deploy somewhere (probably behind a VPN) that you and your awesome colleagues can check out:
```bash
npm run build
```

## Getting some data

I was hoping to have a docker-compose.yaml to just do this without needing to install the awscli...but not working yet (wanted to use the amazong/aws-cli specifically), so just install the aws-cli yourself and run the following:

```bash
aws lambda list-functions -o json > functions.json
```

Make sure you have your credentials set up (somewhere like `~/.aws`) for this to work.
