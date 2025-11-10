import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, IsNull, Not, Repository } from 'typeorm';
import { SessionEntity } from './entities/session.entity';
import { ConfService, DataValidationPipe, LibraryAppService, LogService, YesNoEnum } from '@libs/library-app';
import { SessionMetaService } from './meta/session.meta.service';

@Injectable()
export class SessionService {

constructor(
    private dataSource: DataSource,

    @InjectRepository(SessionEntity) 
    private readonly repository: Repository<SessionEntity>,

    private readonly sessionMeta: SessionMetaService,
    private readonly confService: ConfService,
    private readonly logService: LogService,
    private readonly DataValidationPipe: DataValidationPipe,
    private readonly libraryAppService: LibraryAppService,
){
    this.logService.setContext(SessionService.name);
}

async init(sess: SessionEntity): Promise<SessionEntity> {
    const cols = this.libraryAppService.entityFieldsArr<SessionEntity>(this.repository.metadata.columns);
    // first we will try to get any exiting session for this user
    const existing = await this.repository.findOne({
        select: cols,
        where: { 
            auth_id: sess.auth_id,
            device_id: sess.device_id
        },
        withDeleted: true
    });

    if(existing !== null && existing.id !== undefined){
        // we found existing user session so set id in our input
        sess.id = existing.id;
    }

    // perform update or create for new sesion
    const create = this.repository.create(sess);
    const newsess = await this.repository.save(create);

    // we need to get the session again as we need all hidden fields also
    const resp = await this.repository.findOne({
        select: cols,
        where: { id: newsess.id },
        withDeleted: true
    });
    return resp as SessionEntity;
}

async renewSessionJwt(id: number, jwt: string): Promise<SessionEntity> {
    const create = this.repository.create({
        id: id,
        jwt: jwt
    });
    return await this.repository.save(create);
}

async getCurrentSessionUser(id: number): Promise<SessionEntity | null> {
    return await this.repository.findOneBy({ 
        id: id,
        jwt: Not(IsNull()),
        logged_in: YesNoEnum.YES 
    });
}

async findByJwtToken(jwtToken: string): Promise<SessionEntity | null> {
    return await this.repository.findOneBy({ 
        jwt: jwtToken,
    });
}


async close(id: number, auth_id: number): Promise<boolean> {
 
    const sess = await this.repository.update(
        {
            id: id,
            auth_id: auth_id,

        }, 
        {
            jwt: null,
            data: null,
            keep_logged: YesNoEnum.NO, 
            logged_in: YesNoEnum.NO
        }
    );

    if(sess.affected === 1){
        return true;
    }
    return true;
}

}