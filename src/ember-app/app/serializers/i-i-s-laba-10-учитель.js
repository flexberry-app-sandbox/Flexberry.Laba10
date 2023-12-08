import { Serializer as УчительSerializer } from
  '../mixins/regenerated/serializers/i-i-s-laba-10-учитель';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(УчительSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
