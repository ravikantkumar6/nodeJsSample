
# nodeJsSample
## Installation
### Intall express js
```diff 
+* npx express-generator
+* npm install -g express-generator
+* express
+* express --view=pug myapp
+* cd myapp
+* npm install
+* set DEBUG=myapp:* 
+* npm start 
```

### Install NodeMon
```diff
-* npm install -g nodemon
-* npm install --save-dev nodemon
-* nodemon start
```
### Install express-validator
```diff
+* npm install --save express-validator
+* const { check, validationResult } = require('express-validator');
```
```javascript 
[check('username','username should be email').isEmail(), check('password','password should be 5 length').isLength({min : 5})]

 const errors = validationResult(req);
  if (!errors.isEmpty()) {
    errors.array()[0].title = "Error!!!";
    return res.render('error',errors.array()[0]);
  }

```

## Coding
### Bring static content
```diff
+* app.use(express.static('public'))
+* And remove public(root folder from caller)
+* to use virtual path need to add "app.use('/static', express.static('public'))".
+* Static coller place will add /static
```

