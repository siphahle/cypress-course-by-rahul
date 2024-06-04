//cypress - Spec
///<reference types ="Cypress" />
describe('My Second Test', function(){
    it('Does not do much!', function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        // Checkboxes

        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked').and('have.value','option1')
        cy.get('input[type="checkbox"]').check(['option1','option2'])

        //Static Dropdowns

        cy.get('select').select('option2').should('have.value','option2')

        //Dynamic Dropdowns

        cy.get('#autocomplete').type('Nig')
        cy.get('[class="ui-menu-item-wrapper"]').each(($el, index, $list)=>{

            if ($el.text()==="Nigeria")
            {
            
                cy.wrap($el).click()
            }
        })
        cy.get('#autocomplete').should('have.value','Nigeria')

        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')

        // Radio Buttons
        cy.get('.radioButton').should('have.length',3)
        cy.get('[for="radio3"]').check().should('be.checked')

        //How to handle Pop ups.
        
    })
})