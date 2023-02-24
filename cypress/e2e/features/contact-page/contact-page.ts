import {Then, When } from "@badeball/cypress-cucumber-preprocessor";

When ("I click on GET THE QUOTE button It should visit contact Form",()=>{
  cy.get("a:contains(#), a.cta-btn").click().get(".contact-form").should("be.visible");
});

Then ("I should Fill the Form",(dataTable: any)=>{
  cy.get("#name").type(dataTable.rawTable[1][0]);
  cy.get("#number").type(dataTable.rawTable[1][1]);
  cy.get("#email").type(dataTable.rawTable[1][2]);
  cy.get("#address").type(dataTable.rawTable[1][3]);
  cy.get("#reason").type(dataTable.rawTable[1][4]);
  cy.get("[type=datetime-local]").type(dataTable.rawTable[1][5]);
  cy.get("#items").type(dataTable.rawTable[1][6]);
});

Then ("I should see submit button",()=>{
  cy.get("[type=submit]").should("be.visible");
});

When ("I click on it It should show alret message",()=>{
  cy.get("[type=submit]").click().then(() => expect(alert));
});

