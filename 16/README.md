## 16 - Combine Multiple State ADT Based Redux Reducers

Redux provides a convenient helper for combining many reducers called `combineReducer`, but it focuses in on specific attributes on our state, making it incompatible with using the State ADT. We would like a way to avoid keeping all of our reducers in a single file and want the ability to still combine them in a manner that works with the `State` ADT.

So we will put together our own helper that we also call `combineReducers`, but explore how we can use the `First` Monoid and `mreduceMap` to get us all the power that the Redux helper provides, but setup for our unique needs. As a bonus we will get a sneak peak of the power of using the `flip` combinator to create easy to read compositions without pesky argument juggling

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

[4]: https://codesandbox.io/s/github/eggheadio-projects/redux-and-the-state-adt/tree/master/16
[5]: https://egghead.io/lessons/redux-combine-multiple-state-adt-based-redux-reducers
