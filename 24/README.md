## 24 - Extend State ADT Based Transitions After React/Redux Integration

Once we have our model fully integrated with a dispatching state management
system like Redux and a front-end implementation in something like React, there
will come a time when we will need to either add to or extend our model in some
way.

By building out our model first and keeping all of our game logic concerns
isolated to our pure state transitions, it is easy to alter. Usually it is just
a matter of capturing our modifications in a single function and then locating
the point in our existing model where we need our change applied. Then we just
plop in our function, and as long as our function is pure, most of the time it
will just work.


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

[4]: https://codesandbox.io/s/github/eggheadio-projects/redux-and-the-state-adt/tree/master/24
[5]: https://egghead.io/lessons/redux-extend-state-adt-based-transitions-after-react-redux-integration
