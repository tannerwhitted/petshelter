const Pet = require('mongoose').model('Pet');
const errorHandler = require('./concerns/error-handler');

module.exports = {
  index(request, response) {
    Pet.find(request.body)
      .then(pet => response.json(pet))
      .catch(errorHandler.bind(response));
  },
  show(request, response) {
    console.log("thing", request.params);
    Pet.findById(request.params.id)
      .then(Pet => response.json(Pet))
      .catch(errorHandler.bind(response));
  },
  create(request, response) {
    const thisPet = new Pet();
    thisPet.name = request.body.name;
    thisPet.type = request.body.type;
    thisPet.description = request.body.description;
    thisPet.skill1 = request.body.skill1;
    thisPet.skill2 = request.body.skill2;
    thisPet.skill3 = request.body.skill3;
    thisPet.save()
      .then(pet => response.json(pet))
      .catch(errorHandler.bind(response));
  },
  update(request, response) {
    Pet.findByIdAndUpdate(request.params.id, request.body, { new: true })
      .then(pet => response.json(pet))
      .catch(errorHandler.bind(response));
  },
  destroy(request, response) {
    Pet.findByIdAndRemove(request.params.id)
      .then(result => response.json(result))
      .catch(errorHandler.bind(response));
  },
}
