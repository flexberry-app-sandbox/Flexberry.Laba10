import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-laba-10-школа', 'Unit | Model | i-i-s-laba-10-школа', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-laba-10-класс-уч',
    'model:i-i-s-laba-10-родитель',
    'model:i-i-s-laba-10-ученик',
    'model:i-i-s-laba-10-учитель',
    'model:i-i-s-laba-10-школа',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
