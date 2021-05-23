import moment from 'moment';
import { tz } from 'moment-timezone';

const DateUtils = Object.freeze({
  standardFormat: (date = '') => {
    try {
      return moment(date).format('M/D/YYYY');
    } catch (err) {
      return date;
    }
  },
  standardFormatUtcWithTime: (date = '') => {
    try {
      return moment.utc(date).format('M/D/YYYY h:mm a');
    } catch (err) {
      return date;
    }
  },
  getCurrentTimeStampUtc: () => {
    return moment().unix();
  }
});

export default DateUtils;
