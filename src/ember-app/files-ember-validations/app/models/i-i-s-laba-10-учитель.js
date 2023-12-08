import {
  defineNamespace,
  defineProjections,
  Model as УчительMixin
} from '../mixins/regenerated/models/i-i-s-laba-10-учитель';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(УчительMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
