import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

const PrimaryButton = (props) => {
  const {
    generateQR,
    children 
  } = props;
   return (
      <Button
        variant="contained"
        color="primary"
        onClick={generateQR}
        style={{ marginLeft: 20, minWidth: 100 }}
      >
        {children}
      </Button>
    );
  };


export default PrimaryButton;
