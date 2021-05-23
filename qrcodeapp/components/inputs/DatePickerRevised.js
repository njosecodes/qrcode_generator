import React from 'react';
import moment from 'moment'
import { isEmpty, isNil, isUndefined, includes } from 'lodash';

import MomentUTCUtils from '../../utils/MomentUTCUtils';
import InputAdornment from '@material-ui/core/InputAdornment';
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';

import Icons from './Icons';


const { Calendar } = Icons;


const calcInputLabelProps = (disabled, value) => {
  if (!isNil(value) && !isEmpty(value.trim())) {
    return { color: '#000000' };
  } else if (disabled) {
    return { color: '#666666' };
  } else {
    return {};
  }
};

const DatePickerRevised = (props) => {
  const { disabled, label, dobChange, value, dobBlur, isMonthPicker } = props;

  let views = isMonthPicker ? ['year', 'month'] : undefined;
  let format = isMonthPicker ? 'MMM-YYYY' : 'MM/DD/YYYY';
  return (
    <MuiPickersUtilsProvider utils={MomentUTCUtils} libInstance={moment}>
      <DatePicker
        inputVariant="outlined"
        fullWidth
        InputProps={{
          endAdornment: (
            <InputAdornment position="end" style={{ marginRight: '4px' }}>
              <Calendar />
            </InputAdornment>
          ),
        }}
        label={label}
        margin="dense"
        onBlur={dobBlur}
        onChange={dobChange}
        value={value}
        format={format}
        views={views}
      ></DatePicker>
    </MuiPickersUtilsProvider>
  );
};

export default DatePickerRevised;
