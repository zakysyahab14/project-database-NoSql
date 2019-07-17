const User = require("../models/user");

module.exports = {
    getAllUser: (req, res) => {
        User.find({})
        .then(data => res.send(data))
        .catch(error => res.send({
            message : "error brow", 
            error
        })
        )
    },
    createUser: (req, res) => {
        try {
          User.create({ name: "Zaky", age: 25, address: "Bandung" })
            .then(data => res.send(data))
            .catch(error => res.send(error));
        } catch (error) {
          console.log(error);
        }
      },
    
      deleteUser: (req, res) => {
        try {
          User.remove({
            name: ""
          })
            .then(data => res.send(data))
            .catch(error => res.send(error));
        } catch (error) {
          console.log(error);
        }
      },
    
      updateUser: (req, res) => {
        try {
          User.findOneAndUpdate({ name: "Zaky" }, { age: 26 }, (err, result) => {
            if (err) throw err;
            res.send(result);
          });
        } catch (error) {
          console.log(error);
        }
      }
    
};