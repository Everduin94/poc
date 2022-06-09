describe('demo', () => {
  beforeEach(() => {
    cy.init();
  });

  it('should login and navigate to the home page', () => {
    cy.login('demo-user@example.com', '123456');
    cy.visit('/');
    cy.contains('Erik');
  });
});
