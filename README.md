# POC - Proof of Concepts

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
