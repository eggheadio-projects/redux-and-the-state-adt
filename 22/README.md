## 22 - Create Redux Middleware To Dispatch Actions With The Async ADT

We would like the ability to group a series of actions to be dispatched with
single dispatching functions used as handlers in various parts of our game. The
only issue with that, is that animations and other design elements in our game
require us to provide some temporal space between each of those actions in the
series being fired.

This is something we can achieve by reaching for the `Async` ADT provided by the
crocks library. In order to allow for `Async`s in our Redux flow we are going to
need to create some middleware that can identify when an `Async` is provided as
an action, and then handle it appropriately.

The lesson on egghead can be found [here][5]

### Requirements
This code example runs on a POSIX based system (Linux, OSX, etc) in a [nodejs][2] environment
requiring a version greater than `4.2.x` to be run. If you *have* to work in another environment,
this lesson also has a "sandbox" hosted on [Code Sandbox][3] that can be run in browser and can be found
here:

[Lesson Sandbox][4]

### Using This Example
This code example and environment is provided on its own branch. To run this locally, just clone
this repository down, check out this branch and run the following commands:

#### Setup Your Dependencies
To setup the lesson, execute this command in the project folder:

```
$ npm run setup
```

#### Run The Code
Once all dependencies have been pulled down, you can then run the example code.

This code runs in a node environment and logs to the console that the code was run in. Once
started, the environment will listen to changes to the files and re-run the code. This allows
you to have immediate feed back to the changes you made. To exit out of the code example,
just press the keystroke `Ctrl+C`.

To run the lesson, execute the following in the project folder:

```
$ npm start
```


[1]: https://egghead.io/instructors/ian-hofmann-hicks
[2]: https://nodejs.org/
[3]: https://codesandbox.io/

[4]: https://codesandbox.io/s/github/eggheadio-projects/redux-and-the-state-adt/tree/master/22
[5]: https://egghead.io/lessons/redux-create-redux-middleware-to-dispatch-actions-with-the-async-adt
