Feature: Verify Search Poster function
    Scenario: User is able to search for poster
        Given User is logged in
        When User navigate to Catalog > Posters
        Then User can search for poster