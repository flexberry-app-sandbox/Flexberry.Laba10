import EditFormController from 'ember-flexberry/controllers/edit-form';

export default EditFormController.extend({
  parentRoute: 'i-i-s-laba-10-школа-l',

  getCellComponent(attr, bindingPath, model) {
    let cellComponent = this._super(...arguments);
    if (attr.kind === 'belongsTo') {
      switch (`${model.modelName}+${bindingPath}`) {
        case 'i-i-s-laba-10-ученик+классУч':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'название',
            required: true,
            relationName: 'классУч',
            projection: 'КлассУчL',
            autocomplete: true,
          };
          break;

        case 'i-i-s-laba-10-ученик+родитель':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'фио',
            required: true,
            relationName: 'родитель',
            projection: 'РодительL',
            autocomplete: true,
          };
          break;

      }
    }

    return cellComponent;
  },
});
