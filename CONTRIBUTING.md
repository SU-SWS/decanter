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

**IMPORTANT**: By submitting a patch, you agree to allow the project owner to
license your work under the same license as that used by the project.

## Maintainers

If you have commit access, please follow this process for merging patches and
cutting new releases.

### Accepting PRs

1. Check that a PR is within the scope and philosophy of the project.
2. Test the patch locally.
3. Run PR against linter
4. Ensure all documentation and commenting is in place.
5. Squash and merge using command line or Github's merge button.

### Releasing a new version

1. When merging into the main stream select the correct semver label
2. Let the github actions take care of the rest

### Semver strategy

[Semver](http://semver.org/) is a widely accepted method for deciding how
version numbers are incremented in a project. Versions are written as
MAJOR.MINOR.PATCH.

Any change that is backwards-breaking will result in a new **major** release.
Others changes with no impact on rendering are considered backwards-compatible
and will result in a new **patch** release.
