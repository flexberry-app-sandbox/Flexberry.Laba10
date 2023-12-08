import { Serializer as ШколаSerializer } from
  '../mixins/regenerated/serializers/i-i-s-laba-10-школа';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ШколаSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
