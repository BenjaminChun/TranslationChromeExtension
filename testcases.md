# Translate
## TC01 
Title: Translation translates document
Description: A user should be able to translate documents without unexpected errors
Assumption: Users read and understand alerts if error pops up
Test Steps:
[] User selects extension and popup appears -> translate button disabled until language is selected
[] User choose language and translate button enables
[] User clicks on translate and page changes opacity with rolling animation waiting for document to reload
[] After reload, changes should have been reflected
# Add new Keyword
## TC02
Title: Add from start to end
Description: A user should be able to add a new keyword from start to end
Assumption: User is able to intepret and fill in the blanks naturally
Test Steps:
[] User clicks on Keywords Tab and new index file should reveal
[] Default setting is having everything disabled except input sections
[] User clicks on text to match to type in keyword to match
[] As user types, the input fields should enable itself, highlight and add button enables
[] User fills in other relevant input fields leaving irrelevant ones empty
[] User clicks on add new keyword and form resets to default as in pt 2
[] Check if added by selecting and searching for keyword added
[] Click on keyword and it should populate all input fields

## TC03
Title: Highlight works on Add
Description: User should be able to highlight text to match and changes should be reflected and able to be reverted
Assumption: User knows that regex expressions are accepted in text field
Test Steps:
[] Users click on text to match field to enter keyword to match
[] User clicks on highlight button and changes are reflected, clear highlight button is also enabled
[] User clicks on clear-highlight button / clear button on page to clear and page clears itself without refreshing
# Update existing keyword
## TC04
Title: Update works from start to end
Description: User should be able to choose existing keyword to update and perform updates from start to end
Assumption: User knows how to select from dropdown
Test Steps:
[] User clicks on 'Search from existing' and dropdown appears and indication that text input is accepted
[] User types and dropdown refreshes itself to show relevant options
[] User selects dropdown option and input fields populate
[] User makes edit and clicks on update
[] User is prompted to confirm changes made and form is resetted
[] Changes are reflected and can check from dropdown

## TC05
Title: Highlight works on Update
Description: User should be able to highlight the keyword selected and clear it similar to the highlight when adding
Assumption: Clear buttons should appear in front of the stripo components
Test Steps:
[] User selects an option from the dropdown
[] User clicks on highlight button and changes are reflected, clear highlight button enabled
[] User is able clear changes using clear-highlight button and clear button on webpage
[] Webpage is reverted without refreshing
# Delete keyword
## TC06
Title: Delete works from start to end
Description: User is able to select keyword to delete and changes are reflected
Assumption: User is able to select from dropdown
Test Steps:
[] User selects option from dropdown
[] Relevant fields should be populated
[] Delete button is enabled and user clicks on it
[] Prompt to confirm deletion
[] Relevant fields are deleted
# Export function
## TC07
Title: Export function works
Description: User should be able to export and copy to clipboard and changes made should be reflected
Assumption: User has made some changes and can be checked using export
Test Steps:
[] User clicks on export tab and new index file is opened
[] User able to interact with copy and download appropriately
[] User downloads or edits the file in the correct folder