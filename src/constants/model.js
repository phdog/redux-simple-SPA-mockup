import { schema } from 'normalizr';

const departmentSchema = new schema.Entity('department');
const employeeSchema = new schema.Entity('employee');

export const departmentListSchema = [ departmentSchema ];
export const employeeListSchema = [ employeeSchema ];
