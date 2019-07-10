# PeerJsExample

now it show bug on compilation and in runtime:

on compilation:

```
WARNING in ./node_modules/peerjs/dist/peerjs.min.js 1:292-296
Critical dependency: the request of a dependency is an expression
```

in runtime:

```
Uncaught ReferenceError: parcelRequire is not defined
    at push../node_modules/peerjs/dist/peerjs.min.js.parcelRequire.vHo1 (peerjs.min.js:1)
    at Object../node_modules/peerjs/dist/peerjs.min.js (peerjs.min.js:1)
    at __webpack_require__ (bootstrap:79)
    at Module../src/app/app.component.ts (main.js:112)
    at __webpack_require__ (bootstrap:79)
    at Module../src/app/app.module.ts (app.component.ts:10)
    at __webpack_require__ (bootstrap:79)
    at Module../src/main.ts (main.ts:1)
    at __webpack_require__ (bootstrap:79)
    at Object.0 (main.ts:12)
```


Attempts of various import methods:

#1
```
import * as Peer from 'peerjs';
```
compile error:
```
ERROR in src/app/app.component.ts:14:16 - error TS2351: Cannot use 'new' with an expression whose type lacks a call or construct signature.

14     let peer = new Peer();
                  ~~~~~~~~~~

  src/app/app.component.ts:3:1
    3 import * as Peer from 'peerjs';
      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Type originates at this import. A namespace-style import cannot be called or constructed, and will cause a failure at runtime. Consider using a default import or import require here instead.

```

#2

```
import { Peer } from 'peerjs'
```

compile error:

```
ERROR in src/app/app.component.ts:3:10 - error TS2305: Module '"../../node_modules/peerjs"' has no exported member 'Peer'.

3 import { Peer } from 'peerjs'
         ~~~~
```

#3

```
import Peer from 'peerjs'
```

compile error:

```
WARNING in ./node_modules/peerjs/dist/peerjs.min.js 1:292-296
Critical dependency: the request of a dependency is an expression

```

runtime:

```
Uncaught ReferenceError: parcelRequire is not defined
    at push../node_modules/peerjs/dist/peerjs.min.js.parcelRequire.vHo1 (peerjs.min.js:1)
    at Object../node_modules/peerjs/dist/peerjs.min.js (peerjs.min.js:1)
    at __webpack_require__ (bootstrap:79)
    at Module../src/app/app.component.ts (main.js:112)
    at __webpack_require__ (bootstrap:79)
    at Module../src/app/app.module.ts (app.component.ts:11)
    at __webpack_require__ (bootstrap:79)
    at Module../src/main.ts (main.ts:1)
    at __webpack_require__ (bootstrap:79)
    at Object.0 (main.ts:12)
```

#4

```
import Peer = require('peerjs');
```

compile error:

```

    ERROR in src/app/app.component.ts(3,1): error TS1202: Import assignment cannot be used when targeting ECMAScript modules. Consider using 'import * as ns from "mod"', 'import {a} from "mod"', 'import d from "mod"', or another module format instead

```

runtime:

```
AppComponent_Host.ngfactory.js? [sm]:1 ERROR ReferenceError: Peer is not defined
    at new AppComponent (app.component.ts:15)
    at createClass (core.js:27863)
    at createDirectiveInstance (core.js:27685)
    at createViewNodes (core.js:38315)
    at createRootView (core.js:38187)
    at callWithDebugContext (core.js:39716)
    at Object.debugCreateRootView [as createRootView] (core.js:38953)
    at ComponentFactory_.create (core.js:26827)
    at ComponentFactoryBoundToModule.create (core.js:22791)
    at ApplicationRef.bootstrap (core.js:35343)
```





This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
