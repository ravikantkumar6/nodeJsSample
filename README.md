# nodeJsSample
## Installation
### Intall express js

* npx express-generator  
* npm install -g express-generator
* express
* express --view=pug myapp
* cd myapp
* npm install
* set DEBUG=myapp:* 
* npm start

### Install NodeMon
* npm install -g nodemon
* npm install --save-dev nodemon
* nodemon start

## Codeing
### Bring static content
  * app.use(express.static('public'))
  * And remove public(root folder from caller)
  * to use virtual path need to add "app.use('/static', express.static('public'))".
  * Static coller place will add /static
