const Joi = require("joi");
const ErrorsApi = require("../utilities/errorsApi");

module.exports = {
  validateAuthorization(req, res, next) {
    const schema = Joi.object({
      email: Joi.string()
        .email({
          maxDomainSegments: 2,
          tlds: { allow: ["com", "net", "edu", "org"] },
        })
        .required(),
      firstName: Joi.string().min(2).max(30).trim().lowercase().required(),
      lastName: Joi.string().min(2).max(30).trim().lowercase().required(),
      password: Joi.string()
        .pattern(
          new RegExp("^(?=.*[A-Z])(?=.*[a-z])(?=.*d)(?=.*[@#$%^&+=!]).{8,}$")
        )
        .required(),
      username: Joi.string()
        .pattern(new RegExp("^[a-zA-Z0-9]+$"))
        .min(3)
        .max(30)
        .required(),
    });

    const { error, value } = schema.validate(req.body);
    if (error) {
      switch (error.details[0].context.key) {
        case "username":
          next(ErrorsApi.badRequest("You must provide a valid username."));
          break;
        case "email":
          next(ErrorsApi.badRequest("You must provide a valid email."));
          break;
        case "firstName":
          next(ErrorsApi.badRequest("You must provide a valid first name."));
          break;
        case "lastName":
          next(ErrorsApi.badRequest("You must provide a valid last name."));
          break;
        case "password":
          next(
            ErrorsApi.badRequest(
              "You must provide a valid password. Each password should be at least 8 characters in length, include one lowercase and uppercase letter, a number and a special character."
            )
          );
          break;
        default:
          next(ErrorsApi.badRequest("Invalid information has been provided."));
          break;
      }
    } else {
      next();
    }
  },
};
