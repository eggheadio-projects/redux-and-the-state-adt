## 12 - Randomly Pull An Item From An Array With The State ADT

`Functor` composition is a powerful concept that arises when we have one
`Functor` nested in another `Functor`. It becomes even more powerful when both
of those are `Chain`s, allowing us to apply each `Functor`’s special properties
and effects for a given computation.

We witness this power first hand by combining our beloved `State` with a `Pair`
type mixing the ability to randomly pick an index from an `Array` using `State`
and use it to draw an element from the `Array`. We will build up to an easy to
use interface that allows us to pull as many elements as we need, by chaining on
single State transaction.

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

[4]: https://codesandbox.io/s/github/eggheadio-projects/redux-and-the-state-adt/tree/master/12
[5]: https://egghead.io/lessons/redux-randomly-pull-an-item-from-an-array-with-the-state-adt
