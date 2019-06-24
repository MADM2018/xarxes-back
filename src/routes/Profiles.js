const { profilesCount, getAll } = require('../controllers/Profiles');

const ProfilesRoutes = (app) => {
  app.get('/profilesCount', profilesCount);
  app.get('/profilesGetAll', getAll);
};

module.exports.default = ProfilesRoutes;
