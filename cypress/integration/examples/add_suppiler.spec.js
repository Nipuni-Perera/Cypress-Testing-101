//const { describe } = require("mocha");
describe("Different Test suite", () => {
  it("Add Supplier", () => {
    cy.visit("https://admin-qa.different.com.au/#/add-person");
    cy.title().should("eq", "Different Admin");
    cy.location("protocol").should("eq", "https:");
    cy.hash().should('include','#/add-person');
    cy.contains('Address',{timeout:10000}).should('be.visible');
    cy.wait(10000);

    //to find elements using xpath
    cy.xpath('//*[@id="differentApp"]/div/div[2]/div/div/form/div[2]/div[1]/div[1]/input').type("tester");
    cy.xpath('//*[@id="differentApp"]/div/div[2]/div/div/form/div[2]/div[1]/div[2]/div[1]/div/input').type("Tester");
    cy.xpath('//*[@id="differentApp"]/div/div[2]/div/div/form/div[2]/div[1]/div[2]/div[2]/div/input').type("tester@gmail.com");
    cy.xpath('//*[@id="differentApp"]/div/div[2]/div/div/form/div[2]/div[1]/div[2]/div[3]/div/input').type("No 20,1 Street");
    cy.xpath('//*[@id="differentApp"]/div/div[2]/div/div/form/div[2]/div[1]/div[2]/div[4]/div/div/div/div[2]/ul/li[2]/input').type("123456789");
    cy.xpath('//*[@id="differentApp"]/div/div[2]/div/div/form/div[2]/div[1]/div[4]/div[1]/div/input').type("Tester");
    cy.xpath('//*[@id="differentApp"]/div/div[2]/div/div/form/div[2]/div[1]/div[4]/div[2]/div/input').type("tester@gmail.com");
    cy.xpath('//*[@id="differentApp"]/div/div[2]/div/div/form/div[2]/div[1]/div[4]/div[3]/div/input').type("No 20, 1 Street");
    cy.xpath('//*[@id="differentApp"]/div/div[2]/div/div/form/div[2]/div[1]/div[4]/div[4]/div/div/div/div[2]/ul/li[2]/input').type("1089232345")
    cy.xpath('//*[@id="differentApp"]/div/div[2]/div/div/form/div[2]/div[1]/div[5]/input').type("www.google.com");
    //to check single check box
    cy.xpath('//*[@id="differentApp"]/div/div[2]/div/div/form/div[2]/div[1]/div[6]/div[2]/div/div[8]/div[1]/input').check({force:true});   
    cy.xpath('//*[@id="differentApp"]/div/div[2]/div/div/form/div[2]/div[1]/div[7]/div/div/div/div[1]/div[2]/div[1]/input').check({force:true});
    cy.xpath('//*[@id="differentApp"]/div/div[2]/div/div/form/div[2]/div[1]/div[7]/div/div/div/div[1]/div[2]/div[10]/input').check({force:true});

    //to check all the check boxes at once
    //cy.get('[type="checkbox"]').check({force:true});

    cy.xpath('//*[@id="differentApp"]/div/div[2]/div/div/form/div[2]/div[1]/div[9]/div[1]/div/div[1]/input').check({force:true});
    cy.xpath('//*[@id="differentApp"]/div/div[2]/div/div/form/div[2]/div[1]/div[9]/div[2]/div/input').type("100");
    cy.xpath('//*[@id="differentApp"]/div/div[2]/div/div/form/div[2]/div[1]/div[9]/div[3]/div/input').type("50");
    cy.xpath('//*[@id="differentApp"]/div/div[2]/div/div/form/div[2]/div[1]/div[9]/div[4]/div/textarea').type("Test Note")
    cy.xpath('//*[@id="differentApp"]/div/div[2]/div/div/form/div[2]/div[1]/div[10]/input').type("90856743641");
    cy.xpath('//*[@id="bsb"]').type("012209");
    cy.xpath('//*[@id="accountNumber"]').type("42424242");
    cy.xpath('//*[@id="accountHolderName"]').type('Tester');
    cy.xpath('//*[@id="differentApp"]/div/div[2]/div/div/form/div[2]/div[2]/div/button[1]').click();



    
 
    
  //   cy.xpath(' ').type("nipuni");
  //   cy.xpath(' ').type("nipuni");
  //   cy.xpath(' ').type("nipuni");
  //   cy.xpath(' ').type("nipuni");
  });
});