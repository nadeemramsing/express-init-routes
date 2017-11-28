# express-init-routes
A little ExpressJS module to facilitate initialization of routes.

# Purpose
-Separate routes from app.js

-Mapping of model vs. url made available throughout app

# Usage
```
var app = require('express')(),
    restify = require('mongoose-rest-query').restify,
    routes = require('./routes');

var initRoutes = require('express-init-routes');

initRoutes(app, restify, routes);
```

# How to set up routes


Properties:
```
app[method](path, middleware1, middleware2, restify(model))
```


```
var controller = require('./controller'),
    middleware = require('./middleware'),
    route = require('./route');

var routes = [
        //middleware only
        {method: 'use', middleware: middleware.checkAuth},

        //route
        {method: 'use', middleware: route.addressRoute(controller.address)}

        //controller with path
        {method: 'post', path: '/api/user', middleware: controller.user.createUser},

        //model with custom controller
        {method: "use", path: '/api/allproperties', middleware: controller.allproperties.middleware, model: 'AllProperties'},

        //model with restify only
        { method: 'use', path: '/api/accessories', model: 'Accessories' },
    ];

module.exports = routes;
```