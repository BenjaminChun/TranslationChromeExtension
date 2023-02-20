# RegexAdminTool

See the [product](https://benjaminchun.github.io/RegexAdminTool/)

## Background
Localisation task seems to be quite a chore and very manual where we use the UI provided by Stripo
We could do away with the manual clicks and run a script to perform manual and repetitive tasks with a script using API calls to retrieve html code.
There is also considerable setup time and need for understanding before users can perform localisation with current practice which is to use regex on vscode. Hence the need for a simplified way to translate commonly used words or phrases and URLs.

## Basic Requirements
- able to collect inputs and read them
- able to read modify and display data correctly
- error free/error messages covers all possible cases
- able to run program without dependencies
    - any computer can access and achieve same output with same input

## Additional Requirements
- user friendly (use json formatter example, and frameworks to create a code editor)
- lightweight and runs fast
- linting to show changes made

## Solution
Create a translation webapp that takes in HTML input and outputs HTML output according to language which is indicated by parameters set in the webapp. Since Javascript has in-built Regex, we can make use of that to create an environment without dependencies so long as the user is accessing this via the web browser.

## Impact
- powerful as it is portable and easy to maintain
- reduces time on training and set up
- allows people from other departments to use tool since no prior programming language is required
- knowledge base could be further expanded and might grow to become the one-stop translation tool