# CRUD operations

# Problem
Changing the translations.json is very difficult, need the knowledge of regex and also require the user to plant it in manually and understand how the whole program works.

# Solution
Implement a system that is 
- fundamentally able to retrieve user request for CRUD operations on JSON (mainly add) ✓
- fundamentally implement the add operation locally and effect change ✓
- fundamentally has input validation and error handling ✓


- additionally allows undo function (show version history)
- additonally allows administrator to accept change and release in patch
    - might defeat purpose of automation
- additionally able to update and distribute updated JSON files to all users (pub sub design pattern)
    - with an interface that allows user input of 2 fields (<u>a</u>,<u>b</u>)
    - look for <u>a</u> and replace with <u>b</u> + confirm button.
- additionally allows more complex regex as an option
