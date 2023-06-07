const usermodel = require('../models/user_models');
const common = require('../utils/common');
const helper = require('../utils/helper');
const APIResp = require('../utils/APIResp');
const debug = require('debug')('ippopay:usercontroller');

const userContoller = () => {
    const CreateUser = async (req, res) => {
        console.log("Api comes from user controller")
        try {
            const userInput = helper.getReqValues(req);
            debug("UserInput", userInput)
            let condn = {};
            if (userInput.name) {
                condn.name = userInput.name;
                condn.isDeleted = false
            }

            const uniqueCheck = await common.uniqueCheck(userInput, usermodel);
            debug("uniqueCheck", uniqueCheck)
            if (uniqueCheck.status === false) {
                common.logs(req, res, `${userInput.email} - Already exist `, 'ERROR')
                APIResp.getUniquenessError("Email or Mobile already exist", res)
            } 
            else {
                usermodel.create(userInput).then((resp) => {
                    if (resp) {
                        common.logs(req, res, `${resp._id} - Created `, 'INFO')
                        APIResp.getCreatedResult("Created successfully", resp, res);
                    } else {
                        common.logs(req, res, err.message, 'ERROR')
                        APIResp.getErrorResult(err, res);
                    }
                }).catch((error) => {
                    console.log("Error in mogodb", error.errors);
                    common.logs(req, res, error._message, 'ERROR')
                    APIResp.getErrorResult(error.errors, res);
                })
            }
        } catch (err) {
            console.log("Error in user create :", err);
            common.logs(req, res, err.message, 'ERROR')
            APIResp.getINTERNALSERVERError(err, res);
        }
    };

    const LoginUser = async (req, res) => {
        console.log("Api comes from Login user controller")
        try {
            const userInput = helper.getReqValues(req);
            debug("UserInput", userInput)
            let condn = {};
            if(!userInput.email) {
                common.logs(req, res, `Missing Email`, 'ERROR')
                APIResp.getUniquenessError("Missing Email!.", res)
            }
            else if(!userInput.password) {
                common.logs(req, res, `Missing Password `, 'ERROR')
                APIResp.getUniquenessError("Missing Password!.", res)
            }
            else{
                if (userInput.email && userInput.password) {
                    condn.email = userInput.email;
                    condn.password = userInput.password;
                }
                userInput['type'] = 'L';
                const uniqueCheck = await common.uniqueCheck(userInput, usermodel);
                debug("uniqueCheck", uniqueCheck)
                if (uniqueCheck.status === true) {
                    common.logs(req, res, `${userInput.email} - Already exist `, 'ERROR')
                    APIResp.getUniquenessError("Please, Enter a valid Data!.", res)
                } 
                else {
                    if(uniqueCheck?.checkModel?.email) {
                        console.log("uniqueCheck?.checkModel", uniqueCheck?.checkModel, userInput?.password)
                        if(uniqueCheck?.checkModel?.password === userInput?.password) {
                            common.logs(req, res, `${uniqueCheck?.checkModel._id} - Success `, 'INFO')
                            APIResp.getCreatedResult("Successfully Login", uniqueCheck?.checkModel, res);
                        }
                        else{
                            common.logs(req, res, `${userInput.email} - Already exist `, 'ERROR')
                            APIResp.getUniquenessError("Incorrect Password!.", res)
                        }
                    }
                    else{
                        common.logs(req, res, `MisMatch Data `, 'ERROR')
                        APIResp.getUniquenessError("Mismatch Data!.", res)
                    }
                }
            }
        } catch (err) {
            console.log("Error in user create :", err);
            common.logs(req, res, err.message, 'ERROR')
            APIResp.getINTERNALSERVERError(err, res);
        }
    };

    return {
        CreateUser,
        LoginUser
    };
};

module.exports = userContoller()