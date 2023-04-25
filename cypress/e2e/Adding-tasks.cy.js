describe("ToDoMVC - Adding tasks", () => {
    beforeEach(() => {
      cy.visit("http://todomvc.com/examples/react/");
    });
  
    it("should add a single task", () => {
      cy.get(".new-todo").type("My first task{enter}");
      cy.get(".todo-list li").should("have.length", 1);
      cy.get(".todo-list li label").should("contain", "My first task");
    });
  
    it("should add multiple tasks", () => {
      const tasks = ["Task 1", "Task 2", "Task 3"];
  
      tasks.forEach((task, index) => {
        cy.get(".new-todo").type(`${task}{enter}`);
        cy.get(".todo-list li").eq(index).find("label").should("contain", task);
      });
  
      cy.get(".todo-list li").should("have.length", tasks.length);
     
    });
  });
  