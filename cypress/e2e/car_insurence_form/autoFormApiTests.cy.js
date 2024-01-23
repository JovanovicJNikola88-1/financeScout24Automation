import url from '../../fixtures/URL'

describe('Verify auto form API calls work properly', () => {
	it('Verify that vehicle selection makes API work properly', () => {
		cy.request(url.vehicleSelectionMakes).then((response) => {
			expect(response.status).to.eq(200);
			expect(response.body).to.be.an('array').lengthOf(100);
			cy.fixture('vehicleSelectionMakes').should('deep.equal', response.body);
		});
	});
	it('Verify that lookups API work properly', () => {
		cy.request(url.lookups).then((response) => {
			expect(response.status).to.eq(200);
			expect(response.body).to.be.an('object');
			cy.fixture('lookups').should('deep.equal', response.body);
		});
	});
});