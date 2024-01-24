import url from '../../fixtures/URL';

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

	it('Verify that vehicle types API work properly', () => {
		cy.request(`${url.vehicleTypes}?SearchTerm=A1+Allstreet+35+TFSI+S-tronic&Month=1&Year=2024&InsuranceType=AUTO`)
			.then((response) => {
			expect(response.status).to.eq(200);
			expect(response.body).to.be.an('array').to.have.length(1);
			expect(response.body[0].vehicleType).to.equal('A1 Allstreet 35 TFSI S-tronic')
		});
	});
	
	it('Verify that lookups API is protected from the SQL injection bypass to all vehicles', () => {
		// should returns the whole vehicles types
		cy.request(`${url.vehicleTypes}?SearchTerm="'A1 Allstree' OR '1'='1'"&Month=1&Year=2024&InsuranceType=AUTO`).then((response) => {
			console.log(response.body)
			expect(response.status).to.eq(200);
			expect(response.body).to.be.an('array').to.be.empty;
		});
	})

	it('Verify that lookups API is protected from the SQL injection drop all vehicles', () => {
		// should returns the whole vehicles types
		cy.request(`${url.vehicleTypes}?SearchTerm='A1+Allstreet; DROP TABLE Vehicles'&Month=1&Year=2024&InsuranceType=AUTO`)
			.then((response) => {
			expect(response.status).to.eq(200);
			expect(response.body).to.be.an('array').to.be.empty;
		cy.request(`${url.vehicleTypes}?SearchTerm=A1+Allstreet+35+TFSI+S-tronic&Month=1&Year=2024&InsuranceType=AUTO`)
			.then((response) => {
				expect(response.body).not.to.be.empty;
			})
		});
	});
});