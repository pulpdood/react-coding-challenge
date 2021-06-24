# React Coding Challenge for Stan. - Kevin Yip

## Requirements

-   NodeJS
-   Yarn (optional)

## Getting Started

After cloning, run Yarn to install dependencies:

    yarn

or:

    npm install

## Running Application

After installing dependencies, in one terminal, run the command:

    yarn serve

Then in another run this command, which will run the app

    yarn start

Otherwise you can run:

    npm serve

then

    npm start

## Tests

To run all tests run:

    yarn test

or

    npm test

## Technical and architectural design rationale

-   I chose to use parcel as the bundler as opposed to Webpack as it is more lightweight and there is less configuration needed
-   I chose yarn as I believe it is better in general, e.g. in one instance in my experience if a sub-dependency of a dependency has a security flaw, we can use resolutions to force the dependency to use a newer version of the sub-dependency.

## What I would do differently if I had more time and improvements that could be made:

-   Use TypeScript instead of plain JavaScript for type safety or maybe PropTypes
-   Use CSS modules and have single CSS file for each of the components
-   I would have made smaller commits or branches
-   Add a Layout.js file which wraps around the content and includes the header and footer and content in the middle
-   Maybe putting the port and url of the backend into environment variables
-   Added query parameters to the backend to allow for custom feed options, e.g. total number of results
-   Using custom array manipulation for faster performance
-   Add a hamburger menu for mobile
-   Maybe group CSS by logical groupings instead of sorting alphabetically
-   Use CORS to only allow the app to call the backend
-   Clean up CSS, especially the tileImage styles which are a bit hacky
-   Need to ensure tests are following best practices as I am new to front-end testing
-   Write more thorough tests

## Final thoughts

I thoroughly enjoyed this challenge and found it fun and learnt a few things such as the DevOps side of things and enjoyed figuring stuff out. Thank you for taking your time to review this, hope to speak soon!
