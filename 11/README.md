## 11 - Draw Items From One Array To Another Using A Pair ADT

We want to be able to pick nine random cards from an array of twelve cards, but
can run into problems of keeping both the cards already draw and the cards left
to draw from. Tracking two bits of state like this can create some hard to
maintain argument gymnastics when creating our functions. Luckily we have a
datatype `Pair` at our disposal that allows us to combine two values in to one
value.

We will use this `Pair` type to model both a draw pile and a remaining pile, and
take advantage of a couple special properties of `Pair` that will allow us to
combine two `Pair` instances in a meaningful way by `chain`ing. Just like we
have done time and time again with the `State` ADT

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

[4]: https://codesandbox.io/s/github/eggheadio-projects/redux-and-the-state-adt/tree/master/11
[5]: https://egghead.io/lessons/redux-draw-items-from-one-javascript-array-to-another-using-a-pair-adt
