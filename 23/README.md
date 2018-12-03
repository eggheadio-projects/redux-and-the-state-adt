## 23 - Dispatch Multiple Asynchronous Actions With Arguments

There are times when we need to provide input to our action dispatching
functions that we use as handlers. A great use case in our game is when the
player selects one of the cards as their answer. We need to communicate which
card was selected so our state can transition properly.

To complicate the matter, when a player provides their answer, we want to fire a
series of well times actions, with some of them needing this input. We have set
up a nice pattern that will allow us to apply any arguments to any action
created needed in a series of actions in an easy to follow manner.

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

[4]: https://codesandbox.io/s/github/eggheadio-projects/redux-and-the-state-adt/tree/master/23
[5]: https://egghead.io/lessons/javascript-dispatch-multiple-asynchronous-actions-with-arguments
