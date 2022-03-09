import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as DocumentSchema } from 'mongoose';
import { Employee } from './employee.schema';

export type VehicleDocument = Vehicle & Document;

@Schema()
export class Vehicle {
  @Prop()
  id: string;

  @Prop()
  make: string;

  @Prop()
  model: string;

  @Prop()
  vin: string;

  @Prop({ type: DocumentSchema.Types.ObjectId, ref: 'Employee' })
  employeeId: Employee;
}

export const VehicleSchema = SchemaFactory.createForClass(Vehicle);
