---
sidebar_position: 1
---

# Getting started

Let's discover **Logrocker 🎸**.

## Installation
```bash
npm install logrocker
```
or with `yarn`
```bash
yarn add logrocker
```

## Example / Usage
```javascript
import Logger from 'logrocker';

const fetchData = async () => {
  try {
    const data = await load();

    if (data) {
      Logger.log(data);
    }
  } catch (e) {
    Logger.error('Cannot load data', e);
  }
};
```

## Development console
![Development mode](/img/dev_mode.png)
## Production console
![Production mode](/img/prod_mode.png)