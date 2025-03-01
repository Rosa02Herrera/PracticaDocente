import { Module } from '@nestjs/common';
import { ActividadController } from './actividad.controller';
import { ActividadService } from './actividad.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Actividad } from './entities/actividad.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Actividad])],
  controllers: [ActividadController],
  providers: [ActividadService]
})
export class ActividadModule {}
