describe("ToDoMVC - Task counter", () => {
    beforeEach(() => {
        cy.visit("http://todomvc.com/examples/react/");
        const tasks = ["Task 1", "Task 2", "Task 3", "Task 4"];

        tasks.forEach((task, index) => {
            cy.get(".new-todo").type(`${task}{enter}`);
            
        });

    });

    it('Ensure the task counter displays the correct number of active tasks (ADD TASKS)', () => {

        cy.get('.todo-count')
        .should(($counter) => {
          const expectedCount = Cypress.$('.todo-list li').length
          expect($counter).to.contain(expectedCount + ' items left')
        })
      
    })
    it('Ensure the task counter displays the correct number of active tasks (COMPLETE TASKS)', () => {

        cy.get('input.toggle').eq(0).click();
        cy.get('.footer li a[href="#/active"]').click();
        cy.get('.todo-count')
        .should(($counter) => {
          const expectedCount = Cypress.$('.todo-list li').length
          expect($counter).to.contain(expectedCount + ' items left')
        })
      
    })
    it('Ensure the task counter displays the correct number of active tasks (UNCOMPLETE TASKS)', () => {

        cy.get('input.toggle').eq(0).click();
        cy.get('.footer li a[href="#/completed"]').click();
        cy.get('input.toggle').click();
        cy.get('.footer li a[href="#/active"]').click();
        cy.get('.todo-count')
        .should(($counter) => {
          const expectedCount = Cypress.$('.todo-list li').length
          expect($counter).to.contain(expectedCount + ' items left')
        })
      
    })
    it('Ensure the task counter displays the correct number of active tasks (REMOVE TASKS)', () => {

        cy.get('input.toggle').eq(0).click();
        cy.get('button.destroy').eq(1).click({force:true});
        cy.get(".clear-completed").click();
        cy.get('.footer li a[href="#/active"]').click();
        cy.get('.todo-count')
        .should(($counter) => {
          const expectedCount = Cypress.$('.todo-list li').length
          expect($counter).to.contain(expectedCount + ' items left')
        })
      
    })

    
    
});
