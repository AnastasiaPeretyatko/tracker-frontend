import Realm from 'realm';

export class Task extends Realm.Object<Task> {
  _id!: Realm.BSON.UUID;
  title!: string;
  description?: string;
  isComplete!: boolean;
  createdAt!: Date;

  static primaryKey = '_id';
  static schema: Realm.ObjectSchema = {
    name: 'Task',
    primaryKey: '_id',
    properties: {
      _id: 'uuid',
      title: 'string',
      description: 'string?',
      createdAt: {
        type: 'date',
        default: new Date(),
      },
      isComplete: {
        type: 'bool',
        default: false,
        indexed: true,
      },
    },
  };
}
