import { v4 as uuid } from 'uuid';
import * as moment from 'moment';

export function generateId() {
  return uuid();
}

export function generateIsoDate() {
  return moment().toISOString();
}
