## 15 - Create State ADT Based Reducers

The typical Redux Reducer is function that takes in the previous state and an
action and uses a switch case to determine how to transition the provided State. We can take advantage of the Action Names being Strings and replace the typical switch case with a JavaScript Object that pairs our State ADT reducers with their actions.

We can also take care of the case in which a reducer does not have an implementation for a given action, by reaching for the `Maybe` data type and updating our main Redux reducer to handle the case for us, by providing the previous state untouched. And all of this can be captured in a simple helper function we can use in all of our reducer files.

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

[4]: https://codesandbox.io/s/github/eggheadio-projects/redux-and-the-state-adt/tree/master/15
[5]: https://egghead.io/lessons/redux-create-state-adt-based-reducers
