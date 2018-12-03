## 20  Connect State ADT Based Redux Actions To A React Application

With our Redux implementation lousy with State ADT based reducers, it is time
to hook it all up to a React Shell. Having already built out some UI/UX in
React that is connected to our store, we’ll spend the first part of this lesson
with a quick tour of how our store integrates using the standard `react-redux`
library.

Once we get a handle on our states propagation through the app, we can focus
in on how we’ll dispatch our actions during game play. We’ll implement the
ability to start the game by using the `startGame` action creator to create
a dispatching function that is passed through our component tree to the Start
Game button in our Playing Area.

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

[4]: https://codesandbox.io/s/github/eggheadio-projects/redux-and-the-state-adt/tree/master/20
[5]: https://egghead.io/lessons/redux-connect-state-adt-based-redux-actions-to-a-react-application
