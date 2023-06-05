import { AcademyInterface } from 'interfaces/academy';

export interface EventInterface {
  id?: string;
  name: string;
  description: string;
  date: Date;
  time: Date;
  academy_id: string;

  academy?: AcademyInterface;
  _count?: {};
}
