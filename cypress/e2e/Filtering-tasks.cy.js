describe("ToDoMVC - Completing tasks", () => {
    beforeEach(() => {
        cy.visit("http://todomvc.com/examples/react/");
        const tasks = ["Task 1", "Task 2", "Task 3"];

        tasks.forEach((task, index) => {
            cy.get(".new-todo").type(`${task}{enter}`);
            
        });

    });

    it('Ensure only the relevant tasks are displayed based on the chosen filter(ALL) ', () => {

        cy.get('input.toggle').eq(0).click();
        cy.get('.selected').click();
        cy.get('.todo-list li').find('label').eq(0).should('contain', 'Task 1');
        cy.get('.todo-list li').find('label').eq(1).should('contain', 'Task 2');
        cy.get('.todo-list li').find('label').eq(2).should('contain', 'Task 3'); 
        
    })    
    it('Ensure only the relevant tasks are displayed based on the chosen filter(ACTIVE) ', () => {

        cy.get('input.toggle').eq(0).click();
        cy.get('.footer li a[href="#/active"]').click();
        cy.get('.todo-list li').find('label').eq(0).should('contain', 'Task 2');
        cy.get('.todo-list li').find('label').eq(1).should('contain', 'Task 3'); 
       
    })  
    it('Ensure only the relevant tasks are displayed based on the chosen filter(COMPLETED) ', () => {

        cy.get('input.toggle').eq(0).click();
        cy.get('.footer li a[href="#/completed"]').click();
        cy.get('.todo-list li').find('label').eq(0).should('contain', 'Task 1');
        cy.get('.todo-list li').find('label').invoke('css', 'text-decoration')
        .should('include', 'line-through');

    }) 
    
});

  
