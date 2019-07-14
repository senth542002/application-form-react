const StudentApplication = require('../../models').StudentApplication;

module.exports = {
  create(req, res) {
    return StudentApplication
      .create({
          name: req.body.name,
          fatherName: req.body.fatherName,
          motherName: req.body.motherName,
          email: req.body.email,
          mobileNumber: req.body.mobileNumber,
          dateOfBirth: req.body.dateOfBirth,
      })
      .then(application => res.status(201).send(application))
      .catch(error => res.status(400).send(console.error));
  }
}
