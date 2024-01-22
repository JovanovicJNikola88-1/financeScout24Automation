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
```
Run tests in headless mode - this will make screenshots if test fails
```
> npx cypress run -b chrome
```
Choose the device option (desktop/mobile)
```
cypress.config.js --> env --> device
```
### NOTE
Before everything, please make sure Node.js is installed on your system [Node.js](https://nodejs.org/en)