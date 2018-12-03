## 21 - Create Middleware To Dispatch Multiple Actions

We only have a few dispatching functions that need to be known by our React
Application. Each one actually has multiple actions that need to be dispatched.
While we could just have many imperative calls to dispatch in our dispatching
functions, but why not use it as an excuse to use an array and write some middleware.

We will create a middleware function that will check dispatched actions to see if
they are arrays. If a given action is an array we loop over the array, dispatching
each action in turn. If it is not however, we just pass it along to be handled
downstream.

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

[4]: https://codesandbox.io/s/github/eggheadio-projects/redux-and-the-state-adt/tree/master/21
[5]: https://egghead.io/lessons/javascript-create-redux-middleware-to-dispatch-multiple-actions
