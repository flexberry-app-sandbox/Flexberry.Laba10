import { Serializer as РодительSerializer } from
  '../mixins/regenerated/serializers/i-i-s-laba-10-родитель';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(РодительSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
