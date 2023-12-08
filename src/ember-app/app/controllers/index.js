import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.laba-10.caption'),
          title: i18n.t('forms.application.sitemap.laba-10.title'),
          children: [{
            link: 'i-i-s-laba-10-родитель-l',
            caption: i18n.t('forms.application.sitemap.laba-10.i-i-s-laba-10-родитель-l.caption'),
            title: i18n.t('forms.application.sitemap.laba-10.i-i-s-laba-10-родитель-l.title'),
            icon: 'briefcase',
            children: null
          }, {
            link: 'i-i-s-laba-10-класс-уч-l',
            caption: i18n.t('forms.application.sitemap.laba-10.i-i-s-laba-10-класс-уч-l.caption'),
            title: i18n.t('forms.application.sitemap.laba-10.i-i-s-laba-10-класс-уч-l.title'),
            icon: 'suitcase',
            children: null
          }, {
            link: 'i-i-s-laba-10-школа-l',
            caption: i18n.t('forms.application.sitemap.laba-10.i-i-s-laba-10-школа-l.caption'),
            title: i18n.t('forms.application.sitemap.laba-10.i-i-s-laba-10-школа-l.title'),
            icon: 'book',
            children: null
          }]
        }
      ]
    };
  }),
})