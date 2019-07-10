import {LfI18n} from '@lightweightform/core';
import {
  I18N_NUMBER_THOUSANDS_SEPARATOR_KEY,
  I18N_VALUE_LABEL_KEY,
} from '@lightweightform/bootstrap-theme';

export const RESERVATION_DETAILS_I18N_EN_US = LfI18n.mergeTranslations({
  '/reservationDetails': {
    [I18N_VALUE_LABEL_KEY]: 'Reservation Details',
  },

  '/reservationDetails/email': {
    [I18N_VALUE_LABEL_KEY]: 'E-mail',
    validations: {
      INVALID_EMAIL: 'The E-mail is invalid.',
    },
  },

  '/reservationDetails/phoneNumber': {
    [I18N_NUMBER_THOUSANDS_SEPARATOR_KEY]: '',
    [I18N_VALUE_LABEL_KEY]: 'Phone Number',
  },

  '/reservationDetails/checkInOut': {
    [I18N_VALUE_LABEL_KEY]: 'Check-In/Check-Out',
  },

  '/reservationDetails/hourOfArrival': {
    [I18N_NUMBER_THOUSANDS_SEPARATOR_KEY]: '',
    [I18N_VALUE_LABEL_KEY]: 'Hour of Arrival',
  },

  '/reservationDetails/flightNumber': {
    [I18N_NUMBER_THOUSANDS_SEPARATOR_KEY]: '',
    [I18N_VALUE_LABEL_KEY]: 'Flight Number',
  },
});
