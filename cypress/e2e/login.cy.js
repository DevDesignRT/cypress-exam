describe("Login to store", () => {
  it("can open login page and fill in login form", () => {
    cy.visit(`${Cypress.config("baseUrl")}/posts`);
  });
});
