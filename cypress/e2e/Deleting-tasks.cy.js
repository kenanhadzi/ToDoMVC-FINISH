describe("ToDoMVC - Deleting tasks", () => {
    beforeEach(() => {
        cy.visit("http://todomvc.com/examples/react/");
        const tasks = ["Task 1", "Task 2", "Task 3"];

        tasks.forEach((task, index) => {
            cy.get(".new-todo").type(`${task}{enter}`);
            
        });

    });

    it(' Delete tasks using the x button when hovering over a task', () => {

        cy.get('button.destroy').eq(0).click({force:true});
        cy.get('.todo-list li').find('label').eq(0).should('contain', 'Task 2');
        cy.get('.todo-list li').find('label').eq(1).should('contain', 'Task 3');
        
    })
    it('Clear all completed tasks using the "Clear completed" button', () => {

        cy.get('input.toggle').eq(0).click();
        cy.get(".clear-completed").click();
        cy.get('.todo-list li').find('label').eq(0).should('contain', 'Task 2');
        cy.get('.todo-list li').find('label').eq(1).should('contain', 'Task 3');

        
    })

    
    
    
    
});
