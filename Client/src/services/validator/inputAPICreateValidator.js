const numberRegex = /^(?:[1-9]|[12][0-9]|30)$/;
const textRegex = new RegExp(/^\s+|\s+$/g);

const inputCreateValidator = (data) => {
    
    let errors = {}

    if (!data.bandName) {
        errors.bandName = "This input can't be empty.";
    } else if (textRegex.test(data.bandName)){
        errors.bandName = "Name can't be empty or consist of only whitespace."
    }

    if (data.bandDiscs.length < 1) {
        errors.bandDiscs = "Please insert at least one Disc name."
    }

    if (data.bandGenres < 1) {
        errors.bandGenres = "Please insert at least one Genre."
    }

    if (!data.startDate) {
        errors.startDate = "Please set a starting date."
    }

    if (!data.numbOfMembers) {
        errors.numbOfMembers = "Please insert a number of members."
    } else if (!numberRegex.test(data.numbOfMembers)) {
        errors.numbOfMembers = "The value must be a number."
    }


    return errors;
}

export default inputCreateValidator;