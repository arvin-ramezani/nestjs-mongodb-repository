import { EmployeeTier, EmployeeStatus } from './employee.enum';

export interface Employee {
  id: string;
  firstName: string;
  lastName: string;
  designation: string;
  nearestCity: string;
  tier: EmployeeTier;
  status: EmployeeStatus;
}
