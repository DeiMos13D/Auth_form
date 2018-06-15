const validate = values => {
    const errors = {}
    if(!values.firstName){
        errors.firstName = 'Required'
    } else if(values.firstName.length < 4) {
        errors.firstName = 'firstName to short'
    }
    if(!values.lastName){
        errors.lastName = 'Required'
    } else if(values.lastName.length < 4) {
        errors.lastName = 'lastName to short'
    }
    if(!values.country){
        errors.country = 'Required'
    } else if(values.country.length < 4) {
        errors.country = 'country to short'
    }
    if(!values.city){
        errors.city = 'Required'
    } else if(values.city.length < 4) {
        errors.city = 'city to short'
    }
    if(!values.address){
        errors.address = 'Required'
    } else if(values.address.length < 4) {
        errors.address = 'address to short'
    }
    if(!values.legal){
        errors.legal = 'Required'
    }
    if(!values.radio){
        errors.radio = 'Required'
    }
    //********Credit Card Number
    if(!values.cc_number){
        errors.cc_number = 'Required'
    } else if(!/^[0-9]{16}$/.test(values.cc_number)) {
        errors.cc_number = 'cc_number to short'
    }
    //********Credit Card Name
    if(!values.cc_name) {
        errors.cc_name = 'Required'
    } else if(!/^([A-Z]+[ ][A-Z]+)$/.test(values.cc_name)){
        errors.cc_name = 'cc_number error'
    }
    //********Credit Card CVC
    if(!values.cc_cvc) {
        errors.cc_cvc = 'Required'
    } else if(!/^[0-9]{3}$/.test(values.cc_cvc)) {
        errors.cc_cvc = 'cc_cvc error'
    }
    //********Credit Card expiration date
    if(!values.cc_exp_date) {
        errors.cc_exp_date = 'Required'
    } else if(!/^(\d{2}\/\d{2})$/.test(values.cc_exp_date)) {
        errors.cc_exp_date = 'date error'
    }

    return errors
}

export default validate