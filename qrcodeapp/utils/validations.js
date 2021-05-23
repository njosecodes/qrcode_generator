//External dependencies
import moment from 'moment';

const validations = Object.freeze({

    validateRequiredField: (txtFieldValues) => {
        let response = [];
        Object.keys(txtFieldValues).map(function (key) {
            if (key == 'dob') {
                if (txtFieldValues[key] == null) {
                    response.push(key);
                };
            }
            else if (!txtFieldValues[key].trim()) {
                response.push(key);
            };
        });
        return response;
    },
    validateString: (value) => {
        let response = true;
        if (typeof value !== "undefined") {
            if (!value.match(/^[a-zA-Z]+$/)) {
                response = false;
            }
        }
        return response;
    },
    validateEmail: (email) => {
        let response = true;
        if (typeof email !== "undefined") {
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(email)) {
                response = false;
            }
        }
        return response;
    },
    validatePhone: (phone) => {
        let response = true;
        if (typeof phone !== "undefined") {
            var pattern = new RegExp(/^[0-9\b]+$/);
            if (!pattern.test(phone)) {
                response = false;
            }
            //length 13 if phone number includes country code
            else if (phone.length < 10 || phone.length > 13) {
                response = false;
            }
        }
        return response;
    },
    validateDateFormat: (dateInput) => {
        let response = true;
        if (typeof dateInput !== "undefined") {
            const dateFormat = 'M/D/YYYY';
            const toDateFormat = moment(new Date(dateInput)).format(dateFormat);
            response = moment(toDateFormat, dateFormat, true).isValid();
            return response;
        }
    }
});
export default validations;