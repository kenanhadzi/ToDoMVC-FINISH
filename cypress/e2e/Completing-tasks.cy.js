describe("ToDoMVC - Completing tasks", () => {
    beforeEach(() => {
        cy.visit("http://todomvc.com/examples/react/");
        const tasks = ["Task 1", "Task 2", "Task 3"];

        tasks.forEach((task, index) => {
            cy.get(".new-todo").type(`${task}{enter}`);
            
        });

    });

    it('Mark tasks as completed using the checkbox ', () => {

        cy.get('input.toggle').click({multiple: true })
        
    })

    it("Ensure completed tasks are displayed with a strike-through", ()=> {

        cy.get('input.toggle').click({multiple: true });
        cy.get('.completed') 
        .find('label').invoke('css', 'text-decoration')
        .should('include', 'line-through')

    })

    
    
    
});
