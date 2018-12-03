## 09 - Use A Pure RNG With The State ADT To Select An Element From State

The resultant in a State ADT instance can be used as a means of communication
between different stateful transactions. It can be used to read and transform a
portion of our state into a form that another transaction is dependent on. This
allows us to only keep what is needed state, without filling it with
calculations that are only needed for one or few transactions.

We take can take advantage of this by pulling not only a random number using the
seed from our state, but also pulling a list of card and filtering them, to
randomly select one from our calculated state. Then we use the resultant to
store the calculation before we save the result to state.

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

[4]: https://codesandbox.io/s/github/eggheadio-projects/redux-and-the-state-adt/tree/master/09
[5]: https://egghead.io/lessons/redux-use-a-pure-rng-with-the-state-adt-to-select-an-element-from-state
