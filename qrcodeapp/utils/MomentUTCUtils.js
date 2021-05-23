// Fixes an issue where values are assumed to be in UTC, and then converted to local (which was causing dates to show up as previous day)
// Probably due to being hosted on East Coast server
import MomentUtils from '@date-io/moment';

class MomentUTCUtils extends MomentUtils {
  format(value, formatString) {
    return this.moment.utc(value).format(formatString);
  }

  parse(value, format) {
    if (value === '') {
      return null;
    }
    return this.moment.utc(value, format, true);
  }

  date(value) {
    if (value === null) {
      return null;
    }

    const moment = this.moment.utc(value);
    moment.locale(this.locale);
    return moment;
  }
}

export default MomentUTCUtils;