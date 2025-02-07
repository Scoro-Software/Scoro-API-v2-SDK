# Scoro API V2 SDK

A simple SDK to interact with Scoro API v2

This library doesn't deal with authentication part for User based API token for now. However, it is possible to use User based API if you have a token, as for Company based API and this also works exactly as the API, creating only a simple layer and interfaces for developers who want to integrate to scoro easier.

Since this is a side project and relatively new, you may face some bugs. The code is Open Source, feel free to open issues and merge requests upon errors or addition of new features.

## Installation

To install and use this library you need `node` and `npm`.

To install, run the following command:
```bash
npm install scoro-api-v2-sdk
```

## Usage

To use it, it's quite simple. Follow the example code to start an instance.

```ts
// For User based API
const userSDK = new ScoroUserAPI({
  token: 'myUserToken'
  siteUrl: 'myScoroSite.scoro.com'
  companyAccount: 'myCompanyAccount'
  language: 'eng' // This is optional (Scoro gets the default language from User if not set)
})

// For Company based API
const companySDK = new ScoroCompanyAPI({
  token: 'my_company_apiKey'
  siteUrl: 'myScoroSite.scoro.com'
  companyAccount: 'myCompanyAccount'
  language: 'eng' // This is optional (Scoro gets the default language from Company if not set)
})

// To access users from API
const users = await userSDK.user.getUsers();

// You can filter as well
const filteredUsers = await companySDK.user.getUsers({
    email: 'user@email.com' // The query passed inside the function is passing to the API inside the filters object
})

// Scoro API has a default limit of 50 per page, this SDK reflects this behavior
// Set perPage and page is also available
const pageTwoUsers = await companySDK.user.getUsers({}, 50, 2)

const firstOneHundred = await companySDK.user.getUsers({}, 100)
```

## API Docs
[https://api.scoro.com](https://api.scoro.com/api/v2)
