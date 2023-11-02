const Joi = require("joi");
const ErrorsApi = require("../utilities/errorsApi");

const joiDebug = require("debug")("app:joi");

module.exports = {
  validateProduct(req, res, next) {
    const schema = Joi.object({
      brand: Joi.string().min(1).max(50).required(),
      colour: Joi.string().min(1).max(20).required(),
      condition: Joi.string().min(3).max(20).required(),
      description: Joi.string().min(1).max(1024).required(),
      isAvailable: Joi.boolean().required(),
      itemName: Joi.string().min(1).max(100).required(),
      material: Joi.string().min(3).max(50).required(),
      onSale: Joi.boolean().required(),
      price: Joi.number().min(0).required(),
      size: Joi.string().min(0).required(),
      sku: Joi.string().min(1).max(100).required(),
      storeLocation: Joi.string().min(1).max(30).required(),
      itemType: Joi.string().required(),
      image: Joi.any(),
      uploadedFile: Joi.string(),
    });
    const { error, value } = schema.validate(req.body);
    if (error) {
      joiDebug(error, value);
      switch (error.details[0].context.key) {
        case "brand":
          next(
            ErrorsApi.badRequest(
              `You must provide a valid brand for the product. The product brand must have a minimum of 1 character and maximum of 50.`
            )
          );
          break;
        case "colour":
          next(
            ErrorsApi.badRequest(
              `You must provide a valid colour for the product. The product colour must have a minimum of 1 character and a maximum of 20.`
            )
          );
          break;
        case "condition":
          next(
            ErrorsApi.badRequest(
              `You must provide a valid condition for the product. The product condition must have a minimum of 3 characters and a maximum of 20.`
            )
          );
          break;
        case "description":
          next(
            ErrorsApi.badRequest(
              `You must provide a valid description for the product. The product description must have a minimum of 1 character and a maximum of 1024.`
            )
          );
          break;
        case "isAvailable":
          next(
            ErrorsApi.badRequest(
              "You must provide whether or not the product is available."
            )
          );
        case "itemName":
          next(
            ErrorsApi.badRequest(
              `You must provide a valid item name for the product. The product name must have a minimum of 1 character and a maximum of 100.`
            )
          );
          break;
        case "material":
          next(
            ErrorsApi.badRequest(
              `You must provide a valid material for the product. The product material must have a minimum of 3 characters and a maximum of 50.`
            )
          );
          break;
        case "itemType":
          next(
            ErrorsApi.badRequest(
              "You must provide an item type for the product. An item type may include Mens, Womens, Kids, Books, Dvds, etc."
            )
          );
        case "onSale":
          next(
            ErrorsApi.badRequest(
              `You must provide whether or not the product is on sale.`
            )
          );
          break;
        case "price":
          next(
            ErrorsApi.badRequest(`You must provide a valid price for the item.`)
          );
          break;
        case "size":
          next(
            ErrorsApi.badRequest(
              `You must provide a valid size for the product.`
            )
          );
          break;
        case "image":
        case "uploadedFile":
          next(
            ErrorsApi.badRequest(
              `The existing image URL and/or path are not in a valid format. Please reupload the image.`
            )
          );
          break;
        default:
          next(
            ErrorsApi.badRequest(
              "Invalid product - Please check product information and try again."
            )
          );
      }
    } else {
      next();
    }
  },
};
