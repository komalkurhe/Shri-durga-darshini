Feature: About Page

Scenario: Verify the navigation bar's visibility on About Page screen
    When I visit the About Page
    Then I should see Navigation Bar 
    Then I should see hero section on screen 
    Then I should see Page Tittle 'Shri Durga Darshini: About' on screen

Scenario: Verify the Other Stories button functionality on About Page screen. 
    When I visit the About Page
    Then I should see 'Other Stories' button on screen and It should have hyperlink
    When I click on 'Other Stories' button It should discover the page
   
Scenario: Verify the footer and its content on About Page screen
    When I visit the About Page
    Then I should see footer on Page
    Then I should see '2' social icons
    Then I should see phone icon and Mobile number
    Then I should see Map on footer
    Then I should see Back To Top button
    When I click on Button It should go to hero section