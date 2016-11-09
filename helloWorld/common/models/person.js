'use strict';

module.exports = function(Person) {
	
	Person.remoteMethod(
    "getData", {
      description: "returns hello",
      accepts: [{arg: "data", type: "number", http: {source: "path"}},
      			{arg: "id", type: "number", http: {source: "path"}},
                {arg: "reqParams", type: "object", http: {source: "body"}}],
      returns: {arg: "result", type: "any", root: true},
      http: {verb: "put", path: "/:data/myData/:id"}
    }
  	);

	Person.getData = (data, id, reqparams, callback) => {
		Person.create(reqparams);
		console.log(reqparams);
		Person.findById(id, (err, data) => {
			data.city = {
				name: "kvp"
			};
			return callback(err, data)
		});
	}


};
