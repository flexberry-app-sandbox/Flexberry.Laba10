import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  назв: DS.attr('string'),
  ученик: DS.hasMany('i-i-s-laba-10-ученик', { inverse: 'школа', async: false }),
  учитель: DS.hasMany('i-i-s-laba-10-учитель', { inverse: 'школа', async: false })
});

export let ValidationRules = {
  назв: {
    descriptionKey: 'models.i-i-s-laba-10-школа.validations.назв.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  ученик: {
    descriptionKey: 'models.i-i-s-laba-10-школа.validations.ученик.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
  учитель: {
    descriptionKey: 'models.i-i-s-laba-10-школа.validations.учитель.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ШколаE', 'i-i-s-laba-10-школа', {
    назв: attr('Назв', { index: 0 }),
    ученик: hasMany('i-i-s-laba-10-ученик', 'Ученик', {
      фИО: attr('ФИО', { index: 0 })
    }),
    учитель: hasMany('i-i-s-laba-10-учитель', 'Учитель', {
      фио: attr('Фио', { index: 0 })
    })
  });

  modelClass.defineProjection('ШколаL', 'i-i-s-laba-10-школа', {
    назв: attr('Назв', { index: 0 })
  });
};
