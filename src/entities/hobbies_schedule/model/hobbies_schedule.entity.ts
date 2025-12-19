import { Realm } from '@realm/react';
import { TASK_SCHEDULE_TYPE } from '@/shared/common/enum';

export type HobbiesScheduleType =
  (typeof TASK_SCHEDULE_TYPE)[keyof typeof TASK_SCHEDULE_TYPE];

export class HobbiesSchedule extends Realm.Object<HobbiesSchedule> {
  _id!: Realm.BSON.UUID;

  type!: HobbiesScheduleType;

  intervalDays?: number;
  startDate?: Date;
  monthDay?: number;

  weekdays?: number[];
  specificDates?: Date[];

  createdAt!: Date;

  static schema: Realm.ObjectSchema = {
    name: 'HobbiesSchedule',
    primaryKey: '_id',
    properties: {
      _id: 'uuid',

      type: 'string', // enum хранится как string

      intervalDays: 'int?',
      startDate: 'date?',
      monthDay: 'int?',

      weekdays: {
        type: 'list',
        objectType: 'int',
        optional: true,
      },

      specificDates: {
        type: 'list',
        objectType: 'date',
        optional: true,
      },

      createdAt: {
        type: 'date',
        default: () => new Date(),
      },
    },
  };
}
