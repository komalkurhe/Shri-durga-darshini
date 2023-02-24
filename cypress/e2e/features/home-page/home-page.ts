///   <reference types="cypress" />

import {Then, When } from "@badeball/cypress-cucumber-preprocessor";

Then ("I should see Asterisk with yellow color",()=>{
  cy.get(".asterisk").eq(4).should("have.css","color","rgb(228, 207, 20)");
});

Then ("I should see About us button",()=>{
  cy.get(".body-btn").eq(0).should("have.css","opacity","1");
});

When ("I click on about us it should go to About page",()=>{
  cy.get(".body-btn").eq(0).click().get(".sr").eq(0);
}); 

Then ("I should see {string} menu Images",(length: string)=>{
  cy.get("[data-sr-id=2] img").should("have.length", length);
});

Then ("I should see {string} Party Order Images",(length: string)=>{
  cy.get("[alt=party-order]").should("have.length", length);
});

Then ("I should see The Full Menu button",()=>{
  cy.get(".body-btn").eq(1).should("have.css","opacity","1");
});
  
When ("I click on it should go to Menu page",()=>{
  cy.get(".body-btn").eq(1).click().get(".sr").eq(0); 
});
 
Then ("I should see Get The Quote button",()=>{
  cy.get(".body-btn").eq(2).should("have.css","opacity","1");
}); 

When ("I click on it should go to Contact page",()=>{
  cy.get(".body-btn").eq(2).click().visit("/resources/pages/contact.html")
});
   