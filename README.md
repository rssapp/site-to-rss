# RSS.app Node.js Library

[![Version](https://img.shields.io/npm/v/site-to-rss.svg)](https://www.npmjs.org/package/site-to-rss)
[![Try on RunKit](https://badge.runkitcdn.com/site-to-rss.svg)](https://npm.runkit.com/site-to-rss)
[![Types](https://badgen.net/npm/types/site-to-rss)](https://www.npmjs.org/package/site-to-rss)
[![Covarage](https://badgen.net/codecov/c/github/babel/babel)](https://www.npmjs.org/package/site-to-rss)

The site-to-rss library provides convenient access to the RSS.app API from
applications written in JavaScript.

## Documentation

See the [ API docs](https://rss.app/docs/api) for Node.js.

## Live Demo

A minimal demo project can be found in [examples directory](https://github.com/RSSapp/site-to-rss/tree/main/examples).

[Online demo](https://npm.runkit.com/site-to-rss) is also available!

## Requirements

Node 8 or higher.

## Installation

Install the package with:

```sh
npm install site-to-rss --save
# or
yarn add site-to-rss
```

## Usage

The package needs to be configured with your account's api and secret key, which is
available in the [RSS.app Dashboard](https://rss.app/docs/api/authentication). Require it with the key's
value:

<!-- prettier-ignore -->
```js
const RssApp = require('site-to-rss');

const rssApp = new RssApp({ apiKey:  'c_...', apiSecret:  's_...' });

rssApp.feed
  .create({ url:  'https://bbc.com' })
  .then((feed) => {
     console.log('Success', feed);
  })
  .catch((err) => {
    console.log('Error', err);
  });
```

Or using ES modules and `async`/`await`:

```js
import RssApp from 'site-to-rss';
const rssApp = new RssApp({ apiKey: 'c_...', apiSecret: 's_...' });

(async () => {
  const feed = await rssApp.feed.create({ url: 'https://bbc.com' });

  console.log(feed.id);
})();
```

### Usage with TypeScript

RSS.app maintains types.

```ts
import RssApp, { RssAppFeed } from 'site-to-rss';
const rssApp = new RssApp({ apiKey: 'c_...', apiSecret: 's_...' });

const createFeed = async () => {
  const feed: RssAppFeed = await rssApp.feed.create({ url: 'https://bbc.com' });

  console.log(feed.id);
};
createFeed();
```

### Using Promises

Every method returns a chainable promise which can be used instead of a regular
callback:

```js
// Create a new feed and then list all feeds in account:
rssApp.feed
  .create({
    url: 'https://bbc.com',
  })
  .then((feed) => {
    return rssApp.feed
      .list({
        limit: 10,
        offset: 0,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        // Deal with an error
      });
  });
```

## More Information

- [Error Handling](https://rss.app/docs/api/errors)
- [Pagination](https://rss.app/docs/api/pagination)

## License

Rss Generator API is freely distributable under the terms of the [MIT license](https://github.com/RSSapp/site-to-rss/blob/main/LICENSE).
