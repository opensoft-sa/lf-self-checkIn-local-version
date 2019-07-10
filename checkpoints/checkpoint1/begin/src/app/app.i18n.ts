import {LfI18n} from '@lightweightform/core';
import {I18N_EN_US} from '@lightweightform/bootstrap-theme';
import {I18N_SELF_CHECK_IN_EN_US} from './i18n/app.i18n.en-US';

export const APP_I18N: Record<string, any> = {
  'en-US': LfI18n.mergeTranslations(
    I18N_EN_US,
    I18N_SELF_CHECK_IN_EN_US,
    /*TODO CP1: add the I18N of all coponents you have created*/
  ),
};
