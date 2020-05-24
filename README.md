# tappay-typescript

[![npm version](https://badge.fury.io/js/tappay-typescript.svg)](https://badge.fury.io/js/tappay-typescript)

This is an unofficial SDK with Typescript Support.

## Usage

```bash
npm i tappay-typescript
```

## How to Use

```typescript
// example.ts
import TapPayService from 'tappay-typescript';

// init service
const Service = new TapPayService({
  partner_key: 'PARTNER_KEY',
  env: 'sandbox', // 'sandbox' or 'production'
});

// payment with sdk
const response = await service.payByPrime(postData);
```

## Test

Will be Update.

## Example

See this repo: [tappay-typescript-example](https://github.com/wiasliaw77210/tappay-typescript-example)

## Reference

* [Official SDK](https://github.com/TapPay/tappay-nodejs)
