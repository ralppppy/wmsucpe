const routes = (module.exports = require("next-routes")());

routes.add("news", "/news/:newsUrlSlug");
