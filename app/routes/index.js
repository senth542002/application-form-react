const studentApplicationController = require('../controllers/').studentApplication;

module.exports = (app) => {
  app.get('/api',(req,res) => res.status(200).send({
    message: 'Welcome to the Student Application!',
  }))

  app.post('/api/applications', studentApplicationController.create)

  app.delete(
    '/api/applications/:applicationId', studentApplicationController.destroy)
};
