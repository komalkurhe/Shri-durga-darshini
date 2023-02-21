Feature: Home Page

Scenario: Verify the navigation bar's visibility on every screen
    When I visit the 'Home' Page
    Then I should see Navigation Bar 
    Then I should see hero section on screen  

Scenario: Verify the explore button functionality on every screen. 
    When I visit the 'Home' Page
    Then I should see Explore button on screen and It should have hyperlink
    When I click on Explore button It should discover the page
 
Scenario: Verify the footer and its content on every screen
    When I visit the 'Home' Page
   Then I should see footer on Page
    Then I should see Asterisk with yellow color
   
  
