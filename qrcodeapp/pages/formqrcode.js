//External dependencies
import React, { useState, Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Head from 'next/head';

//Internal dependencies
import DatePickerRevised from '../components/inputs/DatePickerRevised';
import TextFieldRevised from '../components/inputs/textfield';
import PrimaryButton from '../components/inputs/PrimaryButton';
import dateUtils from '../utils/dateUtils';
import DownloadableQRCode from './QRCode';
import validations from '../utils/validations';
import styles from '../components/form.module.css';
const { standardFormat, getCurrentTimeStampUtc } = dateUtils;


class FormQRCode extends Component {
    constructor() {
        super();

        this.state = {
            dob: null,
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            userData: '',
            codeVisible: false,
            firstNameError: false,
            firstNameValidation: '',
            lastNameError: false,
            lastNameValidation: '',
            phoneValidation: '',
            phoneError: false,
            emailValidation: '',
            emailError: false,
            dobValidation: '',
            dobError: false
        };
        this.dobChange = this.dobChange.bind(this);
        this.dobBlur = this.dobBlur.bind(this);
        this.txtBlur = this.txtBlur.bind(this);
        this.handleValidation = this.handleValidation.bind(this);
        this.generateQR = this.generateQR.bind(this);
    }
    dobChange(newDate) {
        const newValue = standardFormat(newDate);
        this.setState({
            codeVisible: false,
            dob: newValue
        });
    };
    dobBlur(newDate) {
        const newValue = standardFormat(newDate);
        this.setState({
            codeVisible: false,
            dob: newValue
        });
    };
    txtBlur(e) {
        this.setState({
            codeVisible: false,
            [e.target.id]: e.target.value
        });
    };
    handleValidation() {
        let isFormValid = true;
        const errorFields = validations.validateRequiredField({
            firstName: this.state.firstName, lastName: this.state.lastName, email: this.state.email,
            phone: this.state.phone, dob: this.state.dob
        });
        if (errorFields.length > 0) {
            isFormValid = false;
            errorFields.forEach(element => {
                let errorkey = element + "Error";
                let validationkey = element + "Validation";
                this.setState({
                    [errorkey]: true,
                    [validationkey]: 'This field is required'
                });

            });
        }
        if (!errorFields.includes("firstName")) {
            const fnameValid = validations.validateString(this.state.firstName);
            if (!fnameValid) {
                this.setState({
                    firstNameError: true,
                    firstNameValidation: 'Only strings are allowed in this field'
                });
                isFormValid = false;
            }
        }
        if (!errorFields.includes("lastName")) {
            const lnameValid = validations.validateString(this.state.lastName);
            if (!lnameValid) {
                this.setState({
                    lastNameError: true,
                    lastNameValidation: 'Only strings are allowed in this field'
                });
                isFormValid = false;
            }
        }
        if (!errorFields.includes("email")) {
            const emailValid = validations.validateEmail(this.state.email)
            if (!emailValid) {
                this.setState({
                    emailError: true,
                    emailValidation: 'Please enter a valid email'
                });
                isFormValid = false;
            }
        }
        if (!errorFields.includes("phone")) {
            const phoneValid = validations.validatePhone(this.state.phone);
            if (!phoneValid) {
                this.setState({
                    phoneError: true,
                    phoneValidation: 'Please enter a valid phone number'
                });
                isFormValid = false;
            }
        }
        if (!errorFields.includes("dob")) {
            const dobValid = validations.validateDateFormat(this.state.dob);
            if (!dobValid) {
                this.setState({
                    dobError: true,
                    dobValidation: 'Please enter a valid date'
                });
                isFormValid = false;
            }
        }
        //QR Code available only when a valid form is submitted
        this.setState({
            codeVisible: isFormValid
        });
    };
    generateQR() {
        const currentTimeStamp = getCurrentTimeStampUtc();
        this.setState({
            codeVisible: true,
            userData: JSON.stringify({
                firstName: this.state.firstName, lastName: this.state.lastName, email: this.state.email, dob: this.state.dob,
                phone: this.state.phone, created: currentTimeStamp
            }),
            validationArray: {},
            firstNameError: false,
            firstNameValidation: '',
            lastNameError: false,
            lastNameValidation: '',
            phoneValidation: '',
            phoneError: false,
            emailValidation: '',
            emailError: false,
            dobValidation: '',
            dobError: false
        });
    };
    render() {
        return (
            <>
                <div className="styles.container">
                    <Head>
                        <title><h1 className="styles.title">QR Code Generator</h1></title>
                    </Head>
                    <main>
                        <h1 className="styles.title">
                            QR Code Generator
                        </h1>
                        <div className="styles.description">
                            <Grid container spacing={6}>
                                <Grid item xs={12}>
                                    <Paper >First Name</Paper>
                                    <Paper >
                                        <TextFieldRevised id="firstName" label="first name" value={this.state.firstName} txtBlur={this.txtBlur}></TextFieldRevised>
                                    </Paper>
                                    {this.state.firstNameError ? (<div className={styles.error}>{this.state.firstNameValidation}</div>) : (<div></div>)}
                                    <Paper >Last Name</Paper>
                                    <Paper >
                                        <TextFieldRevised id="lastName" label="last name" value={this.state.lastName} txtBlur={this.txtBlur}></TextFieldRevised>
                                    </Paper>
                                    {this.state.lastNameError ? (<div className={styles.error}>{this.state.lastNameValidation}</div>) : (<div></div>)}
                                    <Paper >Date of Birth</Paper>
                                    <Paper >
                                        <DatePickerRevised label="date of birth" dobChange={this.dobChange} dobBlur={this.dobBlur} value={this.state.dob} />
                                    </Paper>
                                    {this.state.dobError ? (<div className={styles.error}>{this.state.dobValidation}</div>) : (<div></div>)}
                                    <Paper >Email</Paper>

                                    <Paper >
                                        <TextFieldRevised id="email" label="email" value={this.state.email} txtBlur={this.txtBlur}></TextFieldRevised>
                                    </Paper>
                                    {this.state.emailError ? (<div className={styles.error}>{this.state.emailValidation}</div>) : (<div></div>)}
                                    <Paper >Phone number</Paper>

                                    <Paper >
                                        <TextFieldRevised id="phone" label="phone number" value={this.state.phone} txtBlur={this.txtBlur}></TextFieldRevised>
                                    </Paper>
                                    {this.state.phoneError ? (<div className={styles.error}>{this.state.phoneValidation}</div>) : (<div></div>)}
                                </Grid>
                                <Paper >
                                    <PrimaryButton children="Generate QR Code" generateQR={this.generateQR}></PrimaryButton>
                                </Paper>
                            </Grid>
                        </div>
                        {this.state.codeVisible ? <div className="container">
                            <Grid container spacing={6}>
                                <Grid item xs={12}>
                                    <DownloadableQRCode value={this.state.userData} />
                                </Grid>
                            </Grid>
                        </div> : <div></div>}

                    </main>
                </div>
            </>
        );
    };
};
export default FormQRCode;