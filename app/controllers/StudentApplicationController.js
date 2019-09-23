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
      .catch(error => res.status(400).send(console.log(error)));
    },

    deleteAll(req, res) {
        return StudentApplication
        .destroy({
            where:{},
            truncate: true
            })
        .then(application => res.sendStatus(200).send(application))
        .catch(error => res.status(400).send(console.log(error)));
    },

  destroy (req, res) {
    console.log('Request:'+req.body);
    return StudentApplication.findOne({
      where: {
        id: req.params.applicationId
      }
    })
      .then(studentApplication => {
        console.log(studentApplication)
        if (!studentApplication) {
          return res.status(404).send({ message: 'Application Form not found' })
        }
        return studentApplication
          .destroy()
          .then(() =>
            res.status(200).send({ message: 'Application Form deleted successfully.' })
          )
          .catch(error => {
            console.log(error);
            res.status(400).send(error + 'StudentApplication1')
          })
      })
      .catch(error => {
        console.log(error);
        res.status(400).send(error + 'StudentApplication2')
      })
   }
}
