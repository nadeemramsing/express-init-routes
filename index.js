var _ = require('lodash');

module.exports = function (app, restify) {
    _.each(routes, function (route) {
        var args = [];

        if (route.path)
            args.push(route.path);

        if (route.middleware)
            args.push(route.middleware);
        else
            _.each(route.middlewares, function (mid) {
                args.push(mid);
            });

        if (route.model)
            args.push(restify(route.model));

        app[route.method].apply(app, args);
    });
}