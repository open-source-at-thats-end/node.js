import { Module } from '@nestjs/common';
import { TypeormDriverService } from './typeorm.driver.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [],
  controllers: [],
  providers: [TypeormDriverService],
  exports: [TypeormDriverService],
})
export class TypeormDriverModule extends TypeOrmModule {

}
