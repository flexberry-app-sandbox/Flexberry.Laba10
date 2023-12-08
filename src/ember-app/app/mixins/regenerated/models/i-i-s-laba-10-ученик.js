import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  фИО: DS.attr('string'),
  классУч: DS.belongsTo('i-i-s-laba-10-класс-уч', { inverse: null, async: false }),
  родитель: DS.belongsTo('i-i-s-laba-10-родитель', { inverse: null, async: false }),
  школа: DS.belongsTo('i-i-s-laba-10-школа', { inverse: 'ученик', async: false })
});

export let ValidationRules = {
  фИО: {
    descriptionKey: 'models.i-i-s-laba-10-ученик.validations.фИО.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  классУч: {
    descriptionKey: 'models.i-i-s-laba-10-ученик.validations.классУч.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  родитель: {
    descriptionKey: 'models.i-i-s-laba-10-ученик.validations.родитель.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  школа: {
    descriptionKey: 'models.i-i-s-laba-10-ученик.validations.школа.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('УченикE', 'i-i-s-laba-10-ученик', {
    фИО: attr('ФИО', { index: 0 })
  });
};
