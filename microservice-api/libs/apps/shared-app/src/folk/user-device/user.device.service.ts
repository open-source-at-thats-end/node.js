import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { UserDeviceEntity } from './entities/user.device.entity';
import { ConfService, DataValidationPipe, LibraryAppService, LogService } from '@libs/library-app';
import { DeviceEntity } from '../../master/device/entities/device.entity';

@Injectable()
export class UserDeviceService {
constructor(
    private dataSource: DataSource,

    @InjectRepository(UserDeviceEntity) 
    private readonly repository: Repository<UserDeviceEntity>,

    private readonly confService: ConfService,
    private readonly logService: LogService,
    private readonly DataValidationPipe: DataValidationPipe,
    private readonly libraryAppService: LibraryAppService,
){
    this.logService.setContext(UserDeviceEntity.name);
}
async verifyUserDeviceIsExist(uDevice: UserDeviceEntity): Promise<UserDeviceEntity> {
    // get all columns list as we need to process for varificarion and we also need some hidden field like delete
    const cols = this.libraryAppService.entityFieldsArr<UserDeviceEntity>(this.repository.metadata.columns);

    const where = new UserDeviceEntity();
    where.u_id = uDevice.u_id;
    where.device_id = uDevice.device_id;
    where.device_token = uDevice.device_token;

    const device = await this.repository.findOne({
        select: cols,
        where: where,
        withDeleted: true
    });

    // check if device is already exist
    if(device !== null && typeof device.id !== 'undefined'){
        return device;
    } else {
        // new device found, so make a new entry
        const newDevice = await this.repository.create(uDevice);
        const create = await this.repository.save(newDevice);

        const newdevice = await this.repository.findOne({
            select: cols,
            where: create,
            withDeleted: true
        });

        return newdevice as UserDeviceEntity;
    }
}
async findOneById(id: number): Promise<UserDeviceEntity | null> {
    return await this.repository.findOneBy({ id: id });
}

}