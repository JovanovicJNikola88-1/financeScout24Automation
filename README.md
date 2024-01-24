# financeScout24Automation
QA task automation

## Project Setup
Install dev dependenices
```
> npm install 
```
Run tests in headed mode
```
> npm run cy:open
```
Run tests in headless mode: 
* this will make screenshots if test fails
* this will make reports
```
> npm run cy:tests
```
In order to change device edit following: <br>
Device options are desktop(default) and mobile
```
cypress.config.js --> env --> device
```
### NOTE
Before everything, please make sure Node.js is installed on your system [Node.js](https://nodejs.org/en)