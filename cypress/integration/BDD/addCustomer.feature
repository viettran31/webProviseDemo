Feature: Verify add customer function
    Verify main functions when adding customer
    Scenario: Save button should be disabled at first
        Given User is logged in
        When User first arrive at add customer screen
        Then Save button should be disabled
    Scenario: Default birthday value should be today
        Given User arrives at add customer UI
        Then Default birthday value should be today
    Scenario: Save button is enabled after input at least one field
        When User input some texts in a field
        Then Save button should be enabled
    Scenario: When leaving required fields empty and Save
        When Input address and click Save
        Then User sees error messages
    Scenario: Fill all required fields and Save
        Given User is logged in
        When User is at add customer screen
        And User fills all required fields and click Save
        Then User should be able to create customer
    Scenario: Fill all fields and Save
        Given User is logged in
        When User first arrive at add customer screen
        And User fills all fields and click Save
        Then User should be able to create customer1
