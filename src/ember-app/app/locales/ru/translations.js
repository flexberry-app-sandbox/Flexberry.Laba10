import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISLaba_10КлассУчLForm from './forms/i-i-s-laba-10-класс-уч-l';
import IISLaba_10РодительLForm from './forms/i-i-s-laba-10-родитель-l';
import IISLaba_10ШколаLForm from './forms/i-i-s-laba-10-школа-l';
import IISLaba_10КлассУчEForm from './forms/i-i-s-laba-10-класс-уч-e';
import IISLaba_10РодительEForm from './forms/i-i-s-laba-10-родитель-e';
import IISLaba_10ШколаEForm from './forms/i-i-s-laba-10-школа-e';
import IISLaba_10КлассУчModel from './models/i-i-s-laba-10-класс-уч';
import IISLaba_10РодительModel from './models/i-i-s-laba-10-родитель';
import IISLaba_10УченикModel from './models/i-i-s-laba-10-ученик';
import IISLaba_10УчительModel from './models/i-i-s-laba-10-учитель';
import IISLaba_10ШколаModel from './models/i-i-s-laba-10-школа';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-laba-10-класс-уч': IISLaba_10КлассУчModel,
    'i-i-s-laba-10-родитель': IISLaba_10РодительModel,
    'i-i-s-laba-10-ученик': IISLaba_10УченикModel,
    'i-i-s-laba-10-учитель': IISLaba_10УчительModel,
    'i-i-s-laba-10-школа': IISLaba_10ШколаModel
  },

  'application-name': 'Laba_10',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Laba_10',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Laba_10',
          title: 'Laba_10'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        'laba-10': {
          caption: 'Laba_10',
          title: 'Laba_10',
          'i-i-s-laba-10-родитель-l': {
            caption: 'Родитель',
            title: ''
          },
          'i-i-s-laba-10-класс-уч-l': {
            caption: 'Класс уч',
            title: ''
          },
          'i-i-s-laba-10-школа-l': {
            caption: 'Школа',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-laba-10-класс-уч-l': IISLaba_10КлассУчLForm,
    'i-i-s-laba-10-родитель-l': IISLaba_10РодительLForm,
    'i-i-s-laba-10-школа-l': IISLaba_10ШколаLForm,
    'i-i-s-laba-10-класс-уч-e': IISLaba_10КлассУчEForm,
    'i-i-s-laba-10-родитель-e': IISLaba_10РодительEForm,
    'i-i-s-laba-10-школа-e': IISLaba_10ШколаEForm
  },

});

export default translations;
