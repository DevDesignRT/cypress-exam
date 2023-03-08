describe("Posts to page", () => {
  it("can fetch all posts", () => {
    cy.visit(`${Cypress.config("baseUrl")}/posts`);
  });
});
