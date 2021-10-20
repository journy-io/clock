[![journy.io](https://raw.githubusercontent.com/journy-io/brand/main/githubbanner.png)](https://journy.io/?utm_source=github&utm_content=readme-clock)

# Clock

![npm](https://img.shields.io/npm/v/@journyio/clock?color=%234d84f5&style=flat-square)
[![npm downloads](https://img.shields.io/npm/dm/@journyio/clock?style=flat-square)](https://www.npmjs.com/package/@journyio/clock)

Consume time as a service.

## 💾 Installation

You can use your package manager (`npm` or `yarn`) to install:

```bash
npm install --save @journyio/clock
```
or
```bash
yarn add @journyio/clock
```

This package depends on [moment/luxon](https://github.com/moment/luxon). If you already have another datetime library installed in your project, we advise you to fork this package.

We don't recommend consuming this package in plain JavaScript (to be able to use interfaces).

## 🔌 Getting started

First, [read this blogpost](https://blog.frankdejonge.nl/being-in-control-of-time-in-php/) to understand the reasoning behind this approach.

Let's say we have a class that creates a user:

```ts
import { DateTime } from "luxon";
import { Clock } from "@journyio/clock";

class User {
  constructor(/* ... */ private readonly createdAt: DateTime) {}

  getCreatedAt() {
    return this.createdAt;
  }
}

class UserService {
  constructor(private readonly clock: Clock) {}

  create(/* ... */): User {
    return new User(
      /* ... */
      this.clock.getUTCTime()
    );
  }
}
```

In our tests we can use `ClockFixed` to control the current time:

```ts
import { ClockFixed } from "@journyio/clock";

const now = DateTime.utc();
const clock = new ClockFixed(now);
const userService = new UserService(clock);
const user = userService.create(/* ... */);

expect(user.getCreatedAt()).toEqual(now);
```

In our normal code we can use `ClockSystem`:

```ts
import { ClockSystem } from "@journyio/clock";

const userService = new UserService(new ClockSystem());
```

By depending on `Clock` we can consume time as a service (so that we're in control of time). Normally we would need to rely on magic or use `setTimeout` to test code that uses the current time. 

## 💯 Tests

To run the tests:

```bash
npm run test
```
