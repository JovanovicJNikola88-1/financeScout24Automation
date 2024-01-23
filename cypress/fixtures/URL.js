const host = Cypress.config("baseUrl");
const vehicleSelectionsAudiA1 =
  host + '/api/webapi/api/v1/' 
	+ 'vehicle-selections/make/AUDI/vehicle-types?SearchTerm=A1&Month=1'
	+ '&Year=2024&InsuranceType=AUTO';

const homePage = 'https://www.financescout24.ch/de';
const carInsurance = 'https://www.financescout24.ch/de/lp/autoversicherung';
const vehicleSelectionMakes =
  `${host}/api/webapi/api/v1/vehicle-selections/AUTO/makes`;
const lookups =
  `${host}/api/webapi/api/v1/lookups`;

module.exports = {
  vehicleSelectionsAudiA1,
  homePage,
  carInsurance,
	vehicleSelectionMakes,
	lookups
};
