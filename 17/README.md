## 17 - Initialize Application State Using The State ADT

Not only will we need to give our initial state to a Redux store, we will also
need to be able to reset our state at any time by dispatching an action. We can
get the best of both worlds by having a function that will return an object with
all of our initial values in it. Then use that function to craft a `State` ADT
transition that will throw out whatever our previous state was and replace it
with the original initial state.

We’ll not only build out an initialize state
transaction, but also use that new transaction to craft an action creator to
expose a means to dispatch at any time an action that will reset our state.

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

[4]: https://codesandbox.io/s/github/eggheadio-projects/redux-and-the-state-adt/tree/master/17
[5]: https://egghead.io/lessons/redux-initialize-application-state-using-the-state-adt
