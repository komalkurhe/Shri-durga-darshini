import {Then, When } from "@badeball/cypress-cucumber-preprocessor";

Then ("I should see Asterisk with yellow color on Footer",()=>{
   cy.get(".asterisk").eq(1).should("have.css","color","rgb(228, 207, 20)");
});

Then ("I should see All Heading",()=>{
    cy.get("h2").should("be.visible");
});

Then ("I should see {string} Menu for Brekfast",(length: string)=>{
    cy.get("[data-sr-id=0] img").should("have.length", length);
});
    
Then ("I should see {string} Menu for Brekfasr All Day",(length: string)=>{
    cy.get("[data-sr-id=4] img").should("have.length", length);
});
    
Then ("I should see {string} Menu for Meals",(length: string)=>{
    cy.get("[data-sr-id=2] img").should("have.length", length);
});

Then ("I should see {string} Menu for Sweets",(length: string)=>{
    cy.get("[data-sr-id=5] img").should("have.length", length);
});
    
Then ("I should see {string} Menu for Beverages",(length: string)=>{
    cy.get("[data-sr-id=3] img").should("have.length", length);
});

