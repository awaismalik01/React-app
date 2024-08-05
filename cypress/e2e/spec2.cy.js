describe("template spec 3", () => {
  it("passes 3", () => {
    cy.visit("https://example.cypress.io");
  });
});

describe("template spec 4", () => {
  it("passes 4", () => {
    cy.visit("https://example.cypress.io");
    cy.title().should("eq", "My Awesome Application");
  });
});
