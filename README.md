# financeScout24Automation
QA task automation

## Project Setup
Install dev dependenices
```
> npm install 
```
Run tests in headed mode
```
> npx cypress open
OR
> npm run cy:open
```
Run tests in headless mode: 
* this will make screenshots if test fails
* this will make reports
```
> npx cypress run -b chrome
OR
> npm run cy:tests
```
Choose the device option (desktop/mobile)
```
cypress.config.js --> env --> device
```
### NOTE
Before everything, please make sure Node.js is installed on your system [Node.js](https://nodejs.org/en)