import {LfI18n} from '@lightweightform/core';
import {FOOD_TABLE_I18N_EN_US} from '../food-table/i18n/food-table.i18n.en-US';
import {I18N_VALUE_LABEL_KEY} from '@lightweightform/bootstrap-theme';

export const FOOD_I18N_EN_US = LfI18n.mergeTranslations({
  FOOD_TABLE_I18N_EN_US,

  '/guests/?/food': {
    [I18N_VALUE_LABEL_KEY]: 'Food',
  },

  '/guests/?/food/comments': {
    [I18N_VALUE_LABEL_KEY]:
      'Do you have additional comments? (allergies, food preferences, ...)',
  },
});
