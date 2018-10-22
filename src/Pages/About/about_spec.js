describe('goriion website', () => {
    it('should display site', () => {
        cy.title().should('include', 'title')
    });
});
