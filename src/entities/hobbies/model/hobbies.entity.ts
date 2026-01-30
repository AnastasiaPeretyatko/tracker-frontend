import { Realm } from '@realm/react';
import { HobbiesSchedule } from '@/entities/hobbies_schedule/model/hobbies_schedule.entity';
import { HobbiesLog } from '@/entities/hobbies_log/model/hobbies_log.entity';

export class Hobbies extends Realm.Object<Hobbies> {
  _id!: Realm.BSON.UUID;

  title!: string;
  description?: string;

  isActive!: boolean;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;

  hobbiesSchedule?: HobbiesSchedule;

  hobbiesLog?: Realm.Results<HobbiesLog>;

  static schema: Realm.ObjectSchema = {
    name: 'Hobbies',
    primaryKey: '_id',
    properties: {
      _id: 'uuid',

      title: 'string',
      description: 'string?',

      isActive: {
        type: 'bool',
        default: true,
      },

      createdAt: 'date',
      updatedAt: 'date',
      deletedAt: 'date?',

      hobbiesSchedule: 'HobbiesSchedule?',

      hobbiesLog: {
        type: 'linkingObjects',
        objectType: 'HobbiesLog',
        property: 'hobbies',
      },
    },
  };
}
