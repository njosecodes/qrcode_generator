import React from 'react';
import classNames from 'classnames';
import { isEmpty, isNil, includes } from 'lodash';

import TextField from '@material-ui/core/TextField';
import makeStyles from '@material-ui/core/styles/makeStyles';

const TextFieldRevised = (props) => {
  const {
    id,
    label,
    txtBlur,
    value 
  } = props;
  
  return (
    <>
      <TextField
        id={id}
        label={label}
        onBlur={event => {
          txtBlur(event);
        }}
      />
    </>
  );
};


export default TextFieldRevised;
