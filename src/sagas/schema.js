import { schema } from 'normalizr';

const departmentSchema = new schema.Entity('departments');
const employeeSchema = new schema.Entity('employees');

export const departmentListSchema = [ departmentSchema ];
export const employeeListSchema = [ employeeSchema ];
