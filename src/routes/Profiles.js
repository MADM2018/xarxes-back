const { profilesCount, getAll, insertProfiles } = require('../controllers/Profiles');

const ProfilesRoutes = (app) => {
  app.get('/profilesCount', profilesCount);
  app.get('/profilesGetAll', getAll);
  app.post('/insertProfiles', insertProfiles);
};

module.exports.default = ProfilesRoutes;
