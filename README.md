# POC - Proof of Concepts

![sweet baby princesses](https://lh3.googleusercontent.com/Rf3sfx680NT-kbdH_1qvdNy3m0jvsgnnG2H2uw5Yu-yboR_VMC3AW9FcfftXZcfHAyjeGl-e2EsdkmiKOcwDztAodK4cvCalyb2vai7OVa1lFSGcmE0TzaDBGHSBTQhGYyFLDRepcYXtW_9n33Z08ay1Q8AfaVW_fwtuJgvLdsPtiOOH4WV33jleYopuduxhZ5zqSyrwnvawasJh4oXwCJqzw_ov085PzyBtpKMdteEvIo0ICQRHzw22VmSuugOSoam2cOVhtFE6FqZE4TfW6QCFLUu0I9QAADEiIDIqOVZOjPlXW46UJmjBMILDt5eWIa9aHEgwkVJ92giXZh9NV3kD9-A2mk-H_7Nd5GmvRPaCnwLNUpa7zx4VKbwkuMpUVSbuCca71LMHrtvGxA2e1XpD3HVsjB99Ewehz-eceV4TyQqPK4cMhQGVkS9PCUIEmJiOV2WjwYg4vBC6n4-ieKrVTee5uVZR3UGU70NAyF5IJfHiQFzpvjrwuiTMwtpIC3NMkKL9YDA2Kka9V_cZO8OWAfcorhIjatOMiocnHYrJib7rbDJc8MbOPXbRmPVVDv_-9QBVgmoT3tu-makyD1ffm-sVaDkZa_9-vXXtWce8pVVvy-OhimzJsKwwTC2B-mHAKmRqskAzvusxZDh7GLY7NmHOlkrkZp9dozoz-A1_2tnpPEDhyrFj63netZcpWpLsYU0NDFyfIeYkRPKHqf-gOeQ5VHvh4bqI63PKBlOUFMywP2eN2CtCftc=w1641-h983-no?authuser=0)
<p align="center">
    Chillin'
</p>

## Articles
- Angular Prototyping
- (Firebase) Angular Prototyping
- [Setup a custom environment with Nx](https://erxk.medium.com/nx-setup-a-custom-environment-116342b7815b)

## Angular Prototyping

![thumbnail](https://cdn-images-1.medium.com/max/800/1*GNxxrAItOWu7k6aeiQ270Q.png)

Dependencies:
- Node.js version 8.0 or higher

Commands ($ means shell, don't add it):
```
// Install Dependencies
$ npm i 

// Run App
$ nx run demo:serve:prototype
$ ng serve configuration=prototype

// Run jest (unit tests)
$ nx run demo:test

// Cypress 
$ nx run demo-e2e:e2e --watch
```

## (Firebase) Angular Prototying

![thumbnail](https://cdn-images-1.medium.com/max/800/1*nAXb_SB7_5uAS0C3hCRHLA.png)

Dependencies:
- Node.js version 8.0 or higher
- Java version 1.8 or higher
- Firebase CLI 8.14.0 or higher

Commands ($ means shell, don't add it):
```
// Install Dependencies
$ npm install -g firebase-tools
$ npm install 

// You may have to update app.component.html
  // (It's basically my template junk-drawer lol)
// Run app (Make sure you're in root)
$ firebase emulators:start  --import=./apps/demo/poc-data
$ nx run demo:serve

// Run Cypress
$ nx run demo-e2e:e2e --watch
```
