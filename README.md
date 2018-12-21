# [Decanter](https://github.com/SU-SWS/decanter)
##### Version: 5.0.0-dev

Changelog: [CHANGELOG.md](CHANGELOG.md)

Description
---

Decanter is an artifact and tool of the design and development system that while
aligned with a single product line, has a chief goal of housing a grid framework
and reusable patterns/components that can be used to help accelerate any project.

Decanter is also a browsable collection of design patterns that have been visually
vetted and translated into code.

Demo
---

To see a live demo of Decanter, [view the online styleguide.](https:decanter.stanford.edu)

Accessibility
---
[![WCAG Conformance 2.0 AA Badge](https://www.w3.org/WAI/wcag2AA-blue.png)](https://www.w3.org/TR/WCAG20/)

Evaluation Date: 2018-08-16  
This project conforms to level AA WCAG 2.0 standards as required by the university's accessibility policy. For more information on the policy please visit: [https://ucomm.stanford.edu/policies/accessibility-policy.html](https://ucomm.stanford.edu/policies/accessibility-policy.html).

System Requirements
---

To build and deploy code, you must have the following installed on your system:

* Node
* Grunt
* KSS

### Installation

These tools need only to be installed globally, so if you already have them installed on your system, you are ready to use or add to the toolset.

You may refer to the respective links above for installation instructions for each, but below is a brief overview for each as well:

### Node

Visit Node's website to download the [installer](http://nodejs.org/).

### Grunt

The only requirement for Grunt is Grunts CLI(Command Line Utility).

If you don't already have that installed, install globally, this is not project specific.
In NPM we do so with the -g flag.

    npm install -g grunt-cli

### KSS

KSS is a documentation syntax for CSS that's intended to have a syntax that's readable
by humans and machines. We use KSS to create our style guide.

If you don't already have that installed, install globally, this is not project specific.

    npm install -g kss

### Troubleshooting

* If you have trouble installing any of the tools, you may need to use the sudo command.
* If you run into any issues with some of the tasks run, `npm rebuild` and try again.
* Make sure that git is installed globally as some bower packages require it to be fetched and installed.

Development Workflow
---

### One-time Setup

The following steps need to be performed once to get your local copy of Decanter up and running:

* `cd` to the local directory where you keep your git repos
* `git clone https://github.com/SU-SWS/decanter.git`
* `cd decanter`
* `npm install -g kss`
* `npm install` to install your remaining dependencies

Workflow
---

### Starting Your Environment

* Start Docker by double clicking the app icon.
* Start Lando by double clicking the app icon.
* Initialize Lando by typing `lando start`. For full Lando documention, see [https://docs.devwithlando.io/](https://docs.devwithlando.io/).
* To build the styleguide, use `grunt styleguide`.
* To compile the files, start the watch task, and automatically refresh the browser when changes are made, use `grunt`.

### Development

Development work is done on a feature branch, which is then peer reviewed and merged into master.

* `cd decanter`
* `lando start`
* `grunt` to start the watch task
* `git checkout master` to ensure that you have the most current branch
* `git checkout -b [new-branch-name]` to create a new branch on which to work
* After you commit your final changes to the repository, create a pull request in Github for review.
