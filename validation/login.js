const isEmpty = require('is-empty');
let validator = require('validator');

module.exports = function validateLoginInput(data) {
    let errors = {};

    // Convert empty fields to an empty string so we can use validator functions
    data.email = !isEmpty(data.email)? data.email : "";
    data.password = !isEmpty(data.password)? data.password : "";

    // Email checks
    if (validator.isEmpty(data.email)) {
        errors.email = "Email required";
    }
    else if (!validator.isEmail(data.email)) {
        errors.email = "Email is Imvalid";
    }

    // Password check
    if (validator.isEmpty(data.password)) {
        errors.password = "Password required";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};