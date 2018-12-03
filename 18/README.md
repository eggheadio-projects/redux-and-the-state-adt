## 18 - Debug A `composeK` Flow

When using ADTs in our code base, it can be difficult to use common debugging
tools like watches and breakpoints. This is mainly due to the common pattern of
using compositions and other ways of manipulating how functions are called. This
can cause us to have to revert to using console logs at the different points in
our flow, to peek at how our data is changing over time. When using ADTs this
gets even further complicated by the fact that we typically need ways to lift
our logging functions into the type.

To get a handle on one way to approach debugging, we’ll look at a `logAfter`
function that is a must in any Functional Programmer’s toolkit. Using `logAfter`
we’ll hunt down a bug currently in our code base and once located, squash that
bug out of existence.

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

[4]: https://codesandbox.io/s/github/eggheadio-projects/redux-and-the-state-adt/tree/master/18
[5]: https://egghead.io/lessons/redux-debug-a-composek-flow
