import { Hobbies } from '@/entities/hobbies/model/hobbies.entity';
import { Realm } from '@realm/react';

export class User extends Realm.Object<User> {
  _id!: Realm.BSON.UUID;
  email!: string;

  hobbies!: Realm.List<Hobbies>;

  static schema: Realm.ObjectSchema = {
    name: 'User',
    primaryKey: '_id',
    properties: {
      _id: 'uuid',
      email: 'string',
      tasks: {
        type: 'list',
        objectType: 'Hobbies',
      },
    },
  };
}
