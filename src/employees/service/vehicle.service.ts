import { Vehicle } from './../schemas/vehicle.schema';
import { VehicleRepository } from '../repositories/vehicle.repository';
import { Injectable } from '@nestjs/common';
import { VehicleCreateDto } from '../dto/vehicleCreate.dto';

@Injectable()
export class VehicleService {
  constructor(private vehicleRepository: VehicleRepository) {}

  async create(vehicleCreateDto: VehicleCreateDto): Promise<Vehicle> {
    return await this.vehicleRepository.create(vehicleCreateDto);
  }

  async getAll(): Promise<Vehicle[]> {
    return await this.vehicleRepository.findAll();
  }
}
