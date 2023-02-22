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