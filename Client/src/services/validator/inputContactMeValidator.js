const emailRegex = new RegExp(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/);
const textRegex = new RegExp(/^\s+|\s+$/g);

const validator = (data) => {

    let errors = {};

    if (!data.user_email) {
        errors.user_email = "This input can't be empty.";
    } else if (!emailRegex.test(data.user_email)){
        errors.user_email = "Insert an valid email please.";
    }

    if (!data.user_name) {
        errors.user_name = "This input can't be empty.";
    } else if (textRegex.test(data.user_name)){
        errors.user_name = "Name can't be empty or consist of only whitespace."
    }

    if (!data.message) {
        errors.message = "Please insert a message.";
    } else if (textRegex.test(data.message)){
        errors.message = "Description can't be empty or consist of only whitespace."
    }

    return errors;

}

export default validator;