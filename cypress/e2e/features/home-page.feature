Feature: Home Page

Scenario: Verify the navigation bar's visibility on Home screen
    When I visit the Home Page
    Then I should see Navigation Bar 
    Then I should see hero section on screen 
    Then I should see Page Tittle 'Shri Durga Darshini' on screen

Scenario: Verify the explore button functionality on Home screen. 
    When I visit the Home Page
    Then I should see 'Explore' button on screen and It should have hyperlink
    When I click on 'Explore' button It should visit discover section of the page
 
Scenario: Verify the footer and its content on Home screen
    When I visit the Home Page
    Then I should see footer on Page
    Then I should see Asterisk with yellow color
    Then I should see '2' social icons
    Then I should see phone icon and Mobile number
    Then I should see Map on footer
    Then I should see Back To Top button
    When I click on Button It should go to hero section
  
Scenario: Verify About, Menu and Contact link from Home Page and Menu should have 4 images
    When I visit the Home Page
    Then I should see About us button having Hyperlink
    Then I should see '4' menu Images
    Then I should see '2' Party Order Images
    Then I should see The Full Menu button having Hyperlink
    Then I should see Get The Quote button having Hyperlink
   

