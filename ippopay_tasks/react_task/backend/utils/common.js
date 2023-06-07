const moment = require("moment");
const UserModel = require("../models/user_models");
const debug = require('debug')('ippopay:utils:common');

var CommonController = {

  uniqueCheck(userInput, model) {
    return new Promise(async (resolve, reject) => {
      let condn;
      debug("Userinput in common page", userInput)
      if(userInput?.type == 'L') {
        condn = {
          $and: [
            { email: userInput.email }
          ]
        }
      }
      else{
        condn = {
          $and: [
            { email: userInput.email },
            { mobile_no: userInput.mobile_no }
          ]
        }
      }
      debug("Model", model, "condn", condn)
      const checkModel = await model.findOne(condn);
      debug("checkModel", checkModel, !checkModel);
      if (!checkModel) {
        const checkUserModel = await UserModel.findOne(condn);
        debug("checkUserModel", checkUserModel);
        if (checkUserModel) {
          resolve({ status: false })
        } else {
          resolve({ status: true })
        }
      } else {
        resolve({ status: false, checkModel: checkModel })
      }
    })
  },

  logs(req, res, message, level) {
    try {
      const { statusCode } = res
      const { method, originalUrl } = req
      const email = req?.headers?.email

      var obj = {
        date: moment(new Date()).format("YYYY-MM-DD HH:mm:ss"),
        statuscode: statusCode,
        method: method,
        path: originalUrl,
        email: email || '',
        message: message
      };
      // obj.error = err
      const jsonData = JSON.stringify(obj);

      if (level === 'INFO') {
        console.log(jsonData)
      } else if (level === 'ERROR') {
        console.error(jsonData)
      } else if (level === 'WARN') {
        console.warn(jsonData)
      }
    } catch (err) {
      console.error(err)
    }
  }
};

module.exports = CommonController;