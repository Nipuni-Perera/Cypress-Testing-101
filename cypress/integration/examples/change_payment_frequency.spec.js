//const { describe } = require("mocha");
describe("Different Test suite", () => {
    it("Visit Different Andi", () => {
      cy.visit("https://admin-qa.different.com.au/#/");
      //cy.get('.btn').contains('Sign in with Google')
      // cy.focused().click()
      cy.contains("Sign in with Google",{timeout:10000}).click();
      cy.location("protocol").should("eq", "https:");
      cy.title().should("eq", "Different Admin");
    });
});


describe("Different Test suite", () => {
    it("change payment frequency", () => {
      cy.wait(10000);
      Cypress.config('chromeWebSecurity',false);
      cy.visit("https://andi-qa.different.com.au/properties/1012/leases/5fab9430004e1e125ca62bcb");
      console.log(Cypress.config('chromeWebSecurity'));
      cy.wait(80000);
      //cy.title().should("eq", "Different Admin");
      cy.location("protocol").should("eq", "https:");
      //cy.hash().should('include','#/add-person');
      //cy.contains('Overview',{timeout:100000}).should('be.visible');
      //cy.get("[class='ledger-action-item__text']").click();
      cy.xpath('//*[@id="different-andi"]/div[2]/div/div/div/div/div[2]/div/div/div/div/div/div[2]/div/button[2]/div/p').click();
  








  
    });
  });