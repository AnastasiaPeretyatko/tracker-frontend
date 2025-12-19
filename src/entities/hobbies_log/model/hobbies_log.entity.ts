import { Hobbies } from '@/entities/hobbies/model/hobbies.entity';
// import { User } from '@/entities/user/model/user.entity';
import { Realm } from '@realm/react';

export class HobbiesLog extends Realm.Object<HobbiesLog> {
  _id!: Realm.BSON.UUID;

  date!: Date;
  completed!: boolean;
  completedAt?: Date;

  hobbies!: Hobbies;
  // user!: User;

  static schema: Realm.ObjectSchema = {
    name: 'HobbiesLog',
    primaryKey: '_id',
    properties: {
      _id: 'uuid',

      date: 'date',
      completed: 'bool',
      completedAt: 'date?',

      hobbies: 'Hobbies',
      // user: 'User',
    },
  };
}
