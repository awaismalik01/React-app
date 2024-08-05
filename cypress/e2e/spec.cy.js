describe("template spec", () => {
  it("passes", () => {
    cy.visit("https://example.cypress.io");
    cy.title().should("eq", "My Awesome Application");
  });
});

describe("template spec 2", () => {
  it("passes 2", () => {
    cy.visit("https://example.cypress.io");
  });
});
