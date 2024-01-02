/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
/// <reference types="cypress" />
/// <reference types="cypress-iframe" />
import "cypress-iframe";

describe("test title", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080");
  });
  it("should show titles", () => {
    cy.get('a[aria-current="page"].router-link-exact-active.router-link-active').should(
      "have.text",
      // eslint-disable-next-line comma-dangle
      "Agregar deseo"
    );
  });
  it("should write text", () => {
    cy.wait(2000);
    cy.type_ckeditor("editor1", "prueba");
    cy.wait(2000);

    cy.get(".aq-card-footer > [data-testid]").click();
    cy.wait(3000);

    cy.get('[data-testid="navWishes"]').click();

    cy.wait(3000);

    cy.get(":nth-child(2) > .aq-table-cell > .aq-table-cell__div").should("contain", "prueba");
  });
});
