Feature: Menu Page

Scenario: Verify the navigation bar's visibility on Menu Page screen
    When I visit the Menu Page
    Then I should see Navigation Bar 
    Then I should see hero section on screen 
    Then I should see Page Tittle 'Shri Durga Darshini: Menu' on screen

Scenario: Verify the explore button functionality on Menu Page screen. 
    When I visit the Menu Page
    Then I should see 'Explore' button on screen and It should have hyperlink
    When I click on 'Explore' button It should visit discover section of the page
   
Scenario: Verify the footer and its content on Menu Page screen
    When I visit the Menu Page
    Then I should see footer on Page
    Then I should see Asterisk with yellow color on Footer
    Then I should see '2' social icons
    Then I should see phone icon and Mobile number
    Then I should see Map on footer
    Then I should see Back To Top button
    When I click on Button It should go to hero section

 Scenario: Verify all headings Number of images for every section.
    When I visit the Menu Page
    Then I should see All Heading
    Then I should see '4' Menu for Brekfast
    Then I should see '6' Menu for Brekfast All Day
    Then I should see '2' Menu for Meals
    Then I should see '2' Menu for Sweets
    Then I should see '6' Menu for Beverages

