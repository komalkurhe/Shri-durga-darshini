import {Then, When } from "@badeball/cypress-cucumber-preprocessor";


When("I visit the Home Page", () => {
    cy.visit("/index.html"); 
   });

   
When("I visit the Menu Page", () => {
    cy.visit("/resources/pages/menu.html"); 
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
  cy.get("a:contains(#), a.cta-btn").click().get(".container").eq(2).should("be.visible");
  //cy.url().should("contain", "#");

});


Then ("I should see footer on Page",()=>{
    cy.get("footer").should("be.visible");
    });
    
    Then ("I should see {string} social icons",()=>{
      cy.get(".social-icons li ").should("have.css","opacity","1");
    
    });
       
    Then ("I should see phone icon and Mobile number",()=>{
    cy.get(".fa-phone").should("have.css","opacity","1");
    cy.get("a:contains(+91 9880004123)");
    });
        
    //When ("I click It should be hyperlink",()=>{
         // cy.url().should("contain", "https://shri-durga-darshini.netlify.app/tel:+91%209880004123");;
         //cy.get("a:contains(), a.cta-btn")
       // });
    
       Then ("I should see Map on footer",()=>{
         cy.get(".map");
       });
    
       Then ("I should see Back To Top button",()=>{
           cy.get(".fa-chevron-up").should("be.visible");
       }); 
    
       When ("I click on Button It should go to hero section",()=>{
        cy.get(".fa-chevron-up").click().get("#hero");
       });
      

Then ("I should see Page Tittle for Every screen",()=>{
     cy.get("title").eq(0).should("have.css","display","none");
} );