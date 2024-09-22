const {urlRouter} = require("./urlRoutes");


function registerRoutes(app)
{
    app.use("/url",urlRouter);
}
module.exports.registerRoutes = registerRoutes;