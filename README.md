# mobx-spy-computed-exception
Reproduction of an issue with mobx, when trying to inspect computed properties in spy event.

## Environment
The script runs in Node v8.9.1

## Steps
* git clone
* npm install
* npm start

*Will throw exception:*

```
Encountered an uncaught exception that was thrown by a reaction
or observer component, in: 'Reaction[Autorun@3]
RangeError: Maximum call stack size exceeded

Reaction doesn't converge to a stable state after 100 iterations.
Probably there is a cycle in the reactive function: Reaction[Autorun@3]
```

You can comment a line indicated in the code to avoid the exception.

## Code
The code is in `spy-test.js`. Using `mobx@4.3.1`.

The issue was seen in a browser, webpack / babel compiled app.
This sample reproduces the error in Node.js. (tested in node v8.9.1)
