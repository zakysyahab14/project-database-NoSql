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
      
      login: async (req, res) => {
        await User.findOne({ email: req.body.email, password: req.body.password })
          .then(async data => {
            if (data.password !== req.body.password) {
              await res.send({
                message: `Password Didn't Match!`
              });
            }
            if (data.email && data.password) {
              res
                .status(200)
                .send({ message: "you are logged in", loggedIn: true });
            }
          })
          .catch(error => {
            res.send({
              message: `ups name and password doesn't match`,
              loggedIn: false
            });
          });
      }

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