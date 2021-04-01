/// <reference types="cypress" />

describe('coupleCase',() => {
    it('couple', () => {
        // first step fill the information about project
        cy.viewport('macbook-16')
        cy.visit('https://www.younited-credit.com/')
        cy.contains('Continuer sans accepter').click()
        cy.get('#projectSelect').select('Véhicule neuf').should('have.class', 'ng-valid')
        cy.get('#amount').select('50000 €').should('have.class', 'ng-valid')
        cy.get('[name="creditMaturity"]').eq(0).select('48 mois').should('have.class', 'ng-valid')
        cy.get('[title="Continuer"]').eq(0).click()
        cy.wait(6000)

        // second step fill the email---------------------------------
        var email = cy.faker.internet.email()

        cy.url().should('contain','/email')
        cy.contains('Première étape').should('be.visible')
        cy.get('#email-input').type(email).should('have.class','ng-valid')
        cy.get('[data-test="navigator-compact-forward"]').click()

        // the situation family--------------------------------------

        cy.url().should('contain','/familysituation')
        cy.get('#content-familysituation-step').should('contain','Votre situation familiale')
        cy.get('#maritalStatus-input').select('Marié(e)').should('have.class','ng-valid')
        cy.get('#childNumberPropal-input').select('1').should('have.class','ng-valid')
        cy.get('#yucOptin_dynCboxId').click({force: true})
        cy.get('[data-test="navigator-compact-forward"]').click()

        // About your accommodation------------------------------------

        cy.url().should('contain','/housing')
        cy.get("#housingStatus-input").select('Propriétaire (sans crédit immobilier en cours)')
        cy.get('#housingStatusFrom-input-month').type('12').should('have.class','ng-valid')
        cy.get('#housingStatusFrom-input-year').type('2010').should('have.class','ng-valid')
        cy.get('#yucPartnerOptin_dynCboxId').click({force: true})
        cy.wait(4000)
        cy.get('[data-test="navigator-compact-forward"]').click()

        // About your professionnal situation----------------------------

        cy.url().should('contain','/professionalsituation')
        cy.get('#activitySector-input').select('PRIVATE_SECTOR').should('have.class','ng-valid')
        cy.get('#profession-input').select('Cadre supérieur') .should('have.class','ng-valid')
        cy.get('#contractType-input').select('CDI').should('have.class','ng-valid')
        cy.get('#employedFrom-input-month').type('10').should('have.class','ng-valid')
        cy.get('#employedFrom-input-year').type('2000').should('have.class','ng-valid')
        cy.get('[data-test="navigator-compact-forward"]').click()

        // Fill the professionnal situation of your partner--------------

        cy.url().should('contain','/partnerprofession')
        cy.get('#partnerActivitySector-input').select('PRIVATE_SECTOR').should('have.class','ng-valid')
        cy.get('#partnerProfession-input').select('SENIOR_EXECUTIVE').should('have-class','ng-valid')
        cy.get('#partnerContractType-input').select('CDI').should('have-class','ng-valid')
        cy.get('#partnerEmployedFrom').type('11').should('have-class','ng-valid')
        cy.get('#partnerEmployedFrom-input-year').type('2002').should('have-class','ng-valid')
        cy.wait(3000)
        cy.get('[data-test="navigator-compact-forward"]').click()

        // Fill the outcome by month------------------------------------

        cy.url().should('contain','/outcomes')
        cy.get('#childSupportPaymentsAmount-input').clear().type('0')
        // .should('have-class','ng-valid')
        cy.get('#childCareExpensesAmount-input').clear().type('2000')
        // .should('have-class','ng-valid')
        cy.get('#loanCount-input').select('0')
        // .should('have-class','ng-valid')
        cy.get('[data-test="navigator-compact-forward"]').click()

        // Your Bank--------------------------------------------------- 
        
        cy.url().should('contain','/bank')
        cy.get('#bankCode-input').select('HSBC')
        // .should('have-class','ng-valid')
        cy.get('#bankFrom-input-year').type('2000')
        // .should('have-class','ng-valid')
        cy.get('[data-test="navigator-compact-forward"]').click()

        // Fill your identity-------------------------------------------

        cy.url().should('contain','/identity')
        cy.get('#GENDERCODE_M').click({force: true}).should('have.class','ng-valid')
        cy.get('#lastName-input').type('NAARA') .should('have.class','ng-valid')
        cy.get('#firstName-input').type('Shikamaru').should('have.class','ng-valid')
        cy.get('#dateOfBirth-input-day').type('01').should('have.class','ng-valid')
        cy.get('#dateOfBirth-input-month').type('12').should('have.class','ng-valid')
        cy.get('#dateOfBirth-input-year').type('1989').should('have.class','ng-valid')
        // cy.get('#countryCode-input').select('FRANCE')
        // .should('have-class','ng-valid')
        cy.get('#postalCode-input').type('94000').should('have.class','ng-valid')
        cy.get('#city-input').select('CRETEIL').should('have.class','ng-valid')
        cy.get('[data-test="navigator-compact-forward"]').click()
    
        // fill partner identity--------------------------------------------

        var lastName = cy.faker.name.lastName()
        var firstName = cy.faker.name.firstName()
        
        cy.url().should('contain','/partneridentity')
        cy.get('#GENDERCODE_MME').click({force: true})
        .should('have.class','ng-valid')
        cy.get('#lastName-input').type(lastName).should('have.class','ng-valid')
        cy.get('#maidenName-input').type('NAARA').should('have.class','ng-valid')
        cy.get('#firstName-input').type(firstName).should('have.class','ng-valid')
        cy.get('#dateOfBirth-input-day').type('10').should('have.class','ng-valid')
        cy.get('#dateOfBirth-input-month').type('12').should('have.class','ng-valid')
        cy.get('#dateOfBirth-input-year').type('1993').should('have.class','ng-valid')
        // cy.get('#countryCode-input').select('FRANCE')
        // .should('have-class','ng-valid')
        cy.get('#postalCode-input').type('34000').should('have.class','ng-valid')
        cy.get('#city-input').select('MONTPELLIER').should('have.class','ng-valid')
        cy.get('[data-test="navigator-compact-forward"]').click()

        // Your contact -------------------------------------------------------

        cy.url().should('contain','contact')
         // cy.contains('#countryCode-input').select('FRANCE')
        // .should('have-class','ng-valid')
        cy.get('#address-input').type('Place de la Mairie')
        // .should('have-class','ng-valid')
        cy.get('#postalCode-input').type('77600')
        // .should('have-class','ng-valid')
        cy.get('#city-input').select('BUSSY ST GEORGES')
        // .should('have-class','ng-valid')
        cy.get('#cellPhoneNumber').type('0612345678')
        // .should('have-class','ng-valid')
        cy.get('#phoneNumber').type('0112345678')
        // .should('have-class','ng-valid')
        

    });
})