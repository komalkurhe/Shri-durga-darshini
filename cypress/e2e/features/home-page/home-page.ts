///   <reference types="cypress" />

import {Then, When } from "@badeball/cypress-cucumber-preprocessor";

When("I visit the {string} Page", () => {
   cy.visit("/index.html"); 
  });

Then ("I should see Navigation Bar",()=>{
    cy.get(".nav").should("be.visible");
});

Then ("I should see hero section on screen",()=>{
  cy.get(".hero").should("be.visible");
} ); 

Then ("I should see Explore button on screen and It should have hyperlink",()=>{
    cy.get(".cta-btn").should("be.visible");
    cy.get("a:contains(#), a.cta-btn")
});

When ("I click on Explore button It should discover the page",()=>{
  cy.get("a:contains(#), a.cta-btn").click().get(".discover-our-story").should("be.visible");
  //cy.url().should("contain", "#");

});

Then ("I should see footer on Page",()=>{
cy.get("footer").should("be.visible");
});

Then ("I should see Asterisk with yellow color",()=>{
cy.get("footer:contains(asterisk)").should("be.visible");
});
   
