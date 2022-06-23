const isEmpty = require('is-empty');
let validator = require('validator');

module.exports = function validateRegisterInput(data) {
    let errors = {};

    // Convert empty fields to an empty string so we can use validator functions
    data.name = !isEmpty? data.name: "";
    data.email = !isEmpty? data.email: "";
    data.password = !isEmpty? data.password: "";
    data.password2 = !isEmpty? data.password2: "";

    // Name Check
    if (validator.isEmpty(data.name)) {
        errors.name = "Name field is required";
    }

    // Email Checks
    if (validator.isEmpty(data.email)) {
        errors.email = "Email field is required";
    }
    else if (!validator.isEmail(data.email)) {
        errors.email = "Email is invalid";
    }

    // Password Checks
    if (validator.isEmpty(data.password)) {
        errors.password = "Password field required";
    }
    if (validator.isEmpty(data.password2)) {
        errors.password2 = "Confirm Password is required";
    }

    if (!validator.isLength(data.password, { min:6, max:30})) {
        errors.password = "Password must be at leat 6 characters";
    }
    if (!validator.equals(data.password, data.password2)) {
        errors.password = "Passwords are not matching";
    }

    return{
        errors,
        isValid: isEmpty(errors)
    };
};