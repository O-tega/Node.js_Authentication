class ValidationError extends Error{
    constructor(message){
        super(message);
        this.name = "validationError";
    }
}


module.exports = ValidationError;