## 14 - Adapt Redux Actions/Reducers For Use With The State ADT

By using the State ADT to define how our application state transitions over
time, we clear up the need for a some of the boilerplate that we typically need
for a solid Redux integration. We can keep our action names and creators in the
same file as the reducer they are used in, as we no longer need to have separate
files to hand the same action across different portions of our state.

We will build our a single reducer that will handle the integration with Redux
and organize our State ADT based reducers in their own files and bring them into
our main reducer to handle running our state transitions and the cases where we
do not have an transition for a given action.

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

[4]: https://codesandbox.io/s/github/eggheadio-projects/redux-and-the-state-adt/tree/master/14
[5]: https://egghead.io/lessons/redux-adapt-redux-actions-reducers-for-use-with-the-state-adt
