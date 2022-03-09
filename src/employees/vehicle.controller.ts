import { Vehicle } from './schemas/vehicle.schema';
import { VehicleCreateDto } from './dto/vehicleCreate.dto';
import { VehicleService } from './service/vehicle.service';
import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('vehicles')
export class VehicleController {
  constructor(private vehicleService: VehicleService) {}

  @Post()
  async create(@Body() vehicleCreateDto: VehicleCreateDto): Promise<Vehicle> {
    return await this.vehicleService.create(vehicleCreateDto);
  }

  @Get()
  async getAll(): Promise<Vehicle[]> {
    return await this.vehicleService.getAll();
  }
}
