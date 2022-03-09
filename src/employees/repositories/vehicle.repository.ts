import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { VehicleCreateDto } from '../dto/vehicleCreate.dto';
import { Vehicle, VehicleDocument } from '../schemas/vehicle.schema';

@Injectable()
export class VehicleRepository {
  constructor(
    @InjectModel(Vehicle.name) private vehicleModel: Model<VehicleDocument>,
  ) {}

  async create(vehicleCreateDto: VehicleCreateDto): Promise<Vehicle> {
    let newVehicle = await this.vehicleModel.create(vehicleCreateDto);
    return await newVehicle.save();
  }

  async findAll() {
    return await this.vehicleModel.find();
  }
}
