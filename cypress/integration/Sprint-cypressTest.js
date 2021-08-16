// tests
import cy from "cypress"


// - [ ] test that you can add text to the box
// - [ ] test that you can select multiple toppings
// - [ ] test that you can submit the form

describe('SPA SPRINT TESTING', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    // our first test
    it('sanity checks that tests can run', () => {
        // call your function here
        // write an expect
        // assertion
        expect(5).to.eql(5)

        //unit test
        // const doubled = doubled(5)
        // expect(doubled).to.equal(10)

        // shallow equals
        expect({}).to.eql({})
        // deep equals
        expect({}).to.equal({})

    })

    const specialInstructionsBox = () => cy.get('textarea[name="specialInstructions"]')
    const submitButton = () => cy.get('#order-button')
    const nameInput = () => cy.get('input[name="name"]')
    const sizeInput = () => cy.get('select[name="size"]')
    const toppingTomatoes = () => cy.get('input[name="tomatoes"]')
    const toppingPepporoni = () => cy.get('input[name="pepporoni"]')
    const toppingBananaPeppers = () => cy.get('input[name="bananaPeppers"]')
    const toppingJalepenos = () => cy.get('input[name="jalepenos"]')
    const toppingGreenPeppers = () => cy.get('input[name="greenPeppers"]')
    //const cancelButton = () => cy.get('#cancelBtn')

    it('the proper elements exist on the page', () => {
        specialInstructionsBox().should('exist')
        cy.get('input[name="ladygaga"]').should('not.exist')
        nameInput().should('exist');
        sizeInput().should('exist');
        toppingBananaPeppers().should('exist');
        toppingGreenPeppers().should('exist');
        toppingJalepenos().should('exist');
        toppingTomatoes().should('exist');
        toppingPepporoni().should('exist');

        // cy.get('button[data-cy="editBtn0"]').should('exist')
        // cy.get('button[data-cy="deleteBtn0"]').should('exist')

        describe("using buttons and inputs", () => {
            // check the submit button is disabled
            it('starts with submit button disabled', () => {
                submitButton().should('be.disabled')
            })

            // check we can type inside the inputs
            it('can type inside the text inputs', () => {
                specialInstructionsBox()
                    .should('have.value', '')
                    .type('Have a great day today')
                    .should('have.value', 'Have a great day today')
            })

            it('can type inside the text inputs', () => {
                nameInput()
                    .should('have.value', '')
                    .type('Mark')
                    .should('have.value', 'Mark')
            })

        })
        it('enables submit if both inputs have text', () => {
            specialInstructionsBox().type("a new hope/quote")
            // pick toppings
            toppingBananaPeppers().check()
            toppingGreenPeppers().check()
            toppingJalepenos().check()
            toppingTomatoes().check()
            toppingPepporoni().check()
            //input name
            nameInput()
                .should('have.value', '')
                .type('Mark')
                .should('have.value', 'Mark')
            //choose pizza size
            sizeInput().select('small')
            // assert - use a should - that the submit button enables
            submitButton().should('be.enabled')

            //submit 
        })

        // it.skip('erases the inputs if the cancel button is clicked', () => {
        //     //assert they are both empty
        //     textInput()
        //         .should('have-value', "")
        //         .type('to boldly go')
        //     // assert author input is empty, then type into it
        //     authorInput()
        //         .should('have-value', "")
        //         .type('Buzz Lightyear')
        //     // select and click the cancel button
        //     cancelButton().click()
        //     // assert they are both empty
        //     textInput()
        //         .should('have.value', '')
        //     authorInput()
        //         .should('have.value', '')
        // })

        // .skip or xit prevents cypress from testing that test

    })
})