## 13 - Pull Many Random Numbers In A Single State ADT Transaction

We have the ability to select a single random card from a pile of twelve cards,
but we would like to pull a total of nine. Not only that, we would like to match
the same transition functions we have been writing all along.

Lucky for use there are three types of functions, or morphisms that we can use
to get us everything we need. We use an anamorphism to expand our one function
into a list of nine functions. Each of these functions are endomorphisms, so we
can use the `mreduce` catamorphism with the `Endo` Monoid to fold them down into
one function that we can use to get this action into our state transactions.

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

[4]: https://codesandbox.io/s/github/eggheadio-projects/redux-and-the-state-adt/tree/master/13
[5]: https://egghead.io/lessons/redux-pull-many-random-numbers-in-a-single-state-adt-transaction
