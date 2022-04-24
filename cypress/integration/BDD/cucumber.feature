Feature: Verify login function
    Verify login function with
    Username: test@qaa.com
    Password: 111111
    Scenario: Did not input username, password, click Login
        Given Visit webpage URL
        When Did not input username and password, click Login
        Then Error messages appear
    
    Scenario: Input username but leave password empty, click Login
        Given Visit webpage URL
        When Input username but leave password empty, click Login
        Then Error message appears

    Scenario: Input password but leave username empty, click Login
        Given Visit webpage URL
        When Input password but leave username empty, click Login
        Then Error message appears for username

    Scenario: Input correct username, password, click Login
        Given Visit webpage URL
        When Input correct username, password, click Login
        Then Able to login 




