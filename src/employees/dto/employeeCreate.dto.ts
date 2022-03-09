import { IsEnum, IsNotEmpty } from 'class-validator';
import { EmployeeTier, EmployeeStatus } from './../employee.enum';
export class EmployeeCraeteDto {
  id: string;

  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;

  designation: string;
  nearestCity: string;

  @IsEnum(EmployeeTier)
  tier: EmployeeTier;
  status: EmployeeStatus;
}
