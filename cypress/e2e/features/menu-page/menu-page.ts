
import {Then, When } from "@badeball/cypress-cucumber-preprocessor";

Then ("I should see Asterisk with yellow color on Footer",()=>{
    cy.get(".asterisk").eq(1).should("have.css","color","rgb(228, 207, 20)");
    });