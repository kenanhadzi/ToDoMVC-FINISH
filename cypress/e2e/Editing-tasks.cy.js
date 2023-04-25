describe("ToDoMVC - Editing tasks", () => {
    beforeEach(() => {
        cy.visit("http://todomvc.com/examples/react/");
        const tasks = ["Task 1", "Task 2", "Task 3"];

        tasks.forEach((task, index) => {
            cy.get(".new-todo").type(`${task}{enter}`);
            cy.get(".todo-list li").eq(index).find("label").should("contain", task);
        });

    });

    it('Editing tasks by double click ', () => {

        cy.get('.todo-list li')
            .eq(1)
            .find('label')
            .dblclick();
    })

    it('Save edited tasks by pressing enter', () => {
        cy.get('.todo-list li')
            .eq(1) 
            .find('label')
            .dblclick();

        cy.get('.todo-list li.editing .edit')
            .clear()
            .type('Task 2 edited{enter}'); 

        cy.get('.todo-list li')
            .eq(1) 
            .find('label')
            .should('contain', 'Task 2 edited');

    })
    it('Save edited tasks by clicking outside the input field', () => {
        cy.get('.todo-list li')
            .eq(0)
            .find('label')
            .dblclick()
        cy.get('.todo-list li.editing .edit')
            .clear()
            .type('Task 1 edited')
        cy.get('html').click();

        cy.get('.todo-list li')
            .eq(0)
            .find('label')
            .should('contain', 'Task 1 edited')

    })
    it('Cancel editing tasks by pressing the Esc key', () => {
        cy.get('.todo-list li')
            .eq(2)
            .find('label')
            .dblclick()
        cy.get('.todo-list li.editing .edit')
            .clear()
            .type('Task 3 edited{esc}')
        cy.get('.todo-list li')
            .eq(2)
            .find('label')
            .should('contain', 'Task 3');

    })
});

