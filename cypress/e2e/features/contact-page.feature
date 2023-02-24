Feature: Contact Page

Scenario: Verify the navigation bar's visibility on Contact Page screen
    When I visit the Contact Page
    Then I should see Navigation Bar 
    Then I should see hero section on screen 
    Then I should see Page Tittle 'Shri Durga Darshini: Contact' on screen

Scenario: Verify the Get The Quote button functionality on Contact Page screen and Fill the Contact Form 
    When I visit the Contact Page
    Then I should see 'GET THE QUOTE' button on screen and It should have hyperlink
    When I click on GET THE QUOTE button It should visit contact Form
    Then I should Fill the Form
    |Name |Contact Number|Email-id          |Adress               |Reason                      |Date            |Items            |
    |Komal|9870546780    |komal@123gmail.com|Pune Talawade IT park|Better Customer Satisfaction|2023-02-22T08:30|Rice Sambar Jamun|
    Then I should see submit button
    When I click on it It should show alret message
  
Scenario: Verify the footer and its content on Contact Page screen
    When I visit the Contact Page
    Then I should see footer on Page
    Then I should see '2' social icons
    Then I should see phone icon and Mobile number
    Then I should see Map on footer
    Then I should see Back To Top button
    When I click on Button It should go to hero section