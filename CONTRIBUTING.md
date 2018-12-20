# Contributing to Decanter

This project is meant to be open source and freely shared. If you find something
broken, confusing, or wrong please first check the issue queue. For new issues
or feature requests, those that post with patches or pull requests and are
respectful will be handled first.

## Using the issue tracker

The issue tracker is the preferred channel for [bug reports](#bugs),
[features requests](#features) and [submitting pull
requests](#pull-requests), but please respect the following restrictions:

* Please **do not** use the issue tracker for personal support requests.

* Please **do** assign a maintainer for review

## Bug reports

A bug is a _demonstrable problem_ that is caused by the code in the repository.
Good bug reports are extremely helpful - thank you!

Guidelines for bug reports:

1. **Use the GitHub issue search** – check if the issue has already been
   reported.
2. **Check if the issue has been fixed** – try to reproduce it using the
   latest `master` branch in the repository.
3. **Isolate the problem** – create a live example (e.g., on
   [Codepen](http://codepen.io)) of a [reduced test
   case](http://css-tricks.com/6263-reduced-test-cases/).

A good bug report shouldn't leave others needing to chase you for more
information. Please try to be as detailed as possible in your report. What is
your environment? What steps will reproduce the issue? What browser(s) and OS
experience the problem? What would you expect to be the outcome? All these
details will help people to fix any potential bugs.

Example:

> Short and descriptive example bug report title
>
> A summary of the issue and the browser/OS environment in which it occurs. If
> suitable, include the steps required to reproduce the bug.
>
> 1. This is the first step
> 2. This is the second step
> 3. Further steps, etc.
>
> `<url>` - a link to the reduced test case
>
> Any other information you want to share that is relevant to the issue being
> reported. This might include the lines of code that you have identified as
> causing the bug, and potential solutions (and your opinions on their
> merits).


## Feature requests

Feature requests are welcome. But take a moment to find out whether your idea
fits with the scope and aims of the project. It's up to *you* to make a strong
case to convince the project's developers of the merits of this feature. Please
provide as much detail and context as possible.


## Pull requests

Good pull requests - patches, improvements, new features - are a fantastic
help. They should remain focused in scope and avoid containing unrelated
commits.

Please adhere to the coding conventions used throughout a project (whitespace,
accurate comments, etc.) and any other requirements (such as test coverage).
Linting is preformed on every pull request. Please see STANDARDS.md for more
information on standards, conventions, and best practices.

Follow this process if you'd like your work considered for inclusion in the
project:

## Pull request workflow

1. [Fork](https://help.github.com/articles/fork-a-repo/) the project, clone your
   fork, and configure the remotes:

   ```bash
   # Clone your fork of the repo into the current directory
   git clone https://github.com/<your-username>/decanter
   # Navigate to the newly cloned directory
   cd decanter
   # Assign the original repo to a remote called "upstream"
   git remote add upstream https://github.com/SU-SWS/decanter
   ```
2. If you cloned a while ago, get the latest changes from upstream:

   ```bash
   git checkout master
   git pull upstream master
   ```
3. Never work directly on `master`. Create a new topic branch (off the latest
   version of `master`) to contain your feature, change, or fix:

   ```bash
   git checkout -b <topic-branch-name>
   ```
4. Commit your changes in logical chunks. Use Git's
   [interactive rebase](https://help.github.com/articles/interactive-rebase)
   feature to tidy up your commits before making them public.

   Be sure to compile the css before submitting.
   Be sure to lint the scss before submitting.
5. Locally rebase the upstream development branch into your topic branch:

   ```bash
   git pull --rebase upstream master
   ```
6. Push your topic branch up to your fork:

   ```bash
   git push origin <topic-branch-name>
   ```
7. [Open a Pull Request](https://help.github.com/articles/using-pull-requests/)
    with a clear title and description.

**IMPORTANT**: By submitting a patch, you agree to allow the project owner to
license your work under the same license as that used by the project.

### CSS Conventions

CSS conventions are maintained through sass and scss linting. Please run your
work against the linter configuration files in this directory. For your
convenience an NPM/Grunt based sass linter has been packaged in this repository.

To install you must have NPM installed.

Then run:

   ```bash
   npm install
   grunt sasslint
   ```

This should output any errors the linter can find. Please fix those before
submitting a pull request.

## Maintainers

If you have commit access, please follow this process for merging patches and
cutting new releases.

### Accepting PRs

1. Check that a PR is within the scope and philosophy of the project.
2. Test the patch locally.
3. Run PR against linter through either Grunt or Code Climate.
4. Ensure all documentation and commenting is in place.
5. Squash and merge using command line or Github's merge button.

### Releasing a new version

1. Include all new functional changes in the CHANGELOG.
2. Use a dedicated commit to increment the version. The version needs to be
   added to the CHANGELOG (inc. date), and `package.json`
3. The commit message must be of `v0.0.0` format.
4. Create an annotated tag for the version: `git tag -m "v0.0.0" 0.0.0`.
5. Push the changes and tags to GitHub: `git push --tags origin master`

### Semver strategy

[Semver](http://semver.org/) is a widely accepted method for deciding how
version numbers are incremented in a project. Versions are written as
MAJOR.MINOR.PATCH.

Any change that is backwards-breaking will result in a new **major** release.
Others changes with no impact on rendering are considered backwards-compatible
and will result in a new **patch** release.
