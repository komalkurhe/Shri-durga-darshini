Feature: Gallary Page

Scenario: Verify the navigation bar's visibility on Gallary Page screen
    When I visit the Gallary Page
    Then I should see Navigation Bar 
    Then I should see hero section on screen 
    Then I should see Page Tittle 'Shri Durga Darshini: Gallery' on screen

Scenario: Verify the explore button functionality on Gallary Page screen. 
    When I visit the Gallary Page
    Then I should see 'Explore' button on screen and It should have hyperlink
    When I click on 'Explore' button It should discover the page
 
Scenario: Verify the footer and its content on Gallary Page screen
    When I visit the Gallary Page
    Then I should see footer on Page
    Then I should see '2' social icons
    Then I should see phone icon and Mobile number
    Then I should see Map on footer
    Then I should see Back To Top button
    When I click on Button It should go to hero section