import { EntityMetaCRUDTypeDefinition, EntityCRUDTypeDefinition, DateTime, EntitySuffix, InIndexPrefix, UnIndexPrefix  } from "@libs/library-app";
import { IsInt, IsJSON, IsNotEmpty, IsOptional, Max, MaxLength, Min, MinLength } from "class-validator";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Directive, Field, Int, ObjectType } from "@nestjs/graphql";
import { GraphQLJSONObject } from "graphql-scalars";
import { UserEntity } from "apps/shared-app/src/folk/user/entities/user.entity";

const  CrawlerScheduleEntityFieldMeta: EntityMetaCRUDTypeDefinition = {

  id: {
      desc: `Unique ID of the crawler schedule, auto generated.`,
      validation: {} 
  },
  u_id: {
      desc: `User ID of the crawler schedule.`,
      validation:{}
  },
  started: {
      desc: `Started date time of the crawler schedule.`,
      validation:{}
  },
  finished: {
      desc: `Finished date time of the crawler schedule.`,
      validation:{}
  },
  raw_data: {
      desc: `Raw data of the crawler schedule.`,
      validation:{}
  },
  deleted: {
      desc: `When record is soft deleted or soft removed, date-time will be saved otherwise null to indicate record is not deleted.`,
      validation:{}
  }
};
const  CrawlerScheduleVirtualFieldMeta: EntityMetaCRUDTypeDefinition = {
  fr_users: {
     desc: `Provides list of crawler schedule users.`,
     validation: {}
   },
}
export const CrawlerScheduleEntityMeta = {...CrawlerScheduleEntityFieldMeta, ...CrawlerScheduleVirtualFieldMeta};
const meta = CrawlerScheduleEntityMeta; // need to use in this file down the line

@ObjectType({ isAbstract: true })
@Directive('@key(fields: "id")') // TODO: FEDERATION step 1 - add directive
@Entity({
  name: 'crawler_schedule',
  engine: 'InnoDB',
})

export class CrawlerScheduleEntity implements EntityCRUDTypeDefinition {
    static colprefix = `crwshd_`;
    static uploaddir: string = `crawler-schedule`;

    static metaname: string = (CrawlerScheduleEntity.name).replace(EntitySuffix, '');
    static metadesc: string = 'Provides list of crawler schedules in the world.';

    @Field(() => Int, {nullable: true, description: meta.id.desc})
    @PrimaryGeneratedColumn({
      name: `${CrawlerScheduleEntity.colprefix}id`, 
      type: `smallint`, 
      unsigned: true, 
      primaryKeyConstraintName: `PRIMARY`,
    })
    id?: number;

    @Field(() => Int, {nullable: true, description: meta.u_id.desc})
    @Column({
      name: `${CrawlerScheduleEntity.colprefix}u_id`, 
      type: `int`, 
      unsigned: true, 
      comment: `FK (user => u_id)`
    })
    @IsNotEmpty()
    @IsInt()
    u_id?: number;

    @Field(() => DateTime, {nullable: false, description: meta.started.desc})
    @Column({
      name: `${CrawlerScheduleEntity.colprefix}started`, 
      type: `datetime`,
    })
    @IsNotEmpty()
    @Index(`${InIndexPrefix}${CrawlerScheduleEntity.colprefix}started`, { unique: false })
    started?: Date;

    @Field(() => DateTime, {nullable: true, description: meta.finished.desc})
    @Column({
      name: `${CrawlerScheduleEntity.colprefix}finished`, 
      type: `datetime`,
      nullable: true,
    })
    @IsOptional()
    @Index(`${InIndexPrefix}${CrawlerScheduleEntity.colprefix}finished`, { unique: false })
    finished?: Date;

    @Field(() => String, { nullable: false, description: meta.raw_data.desc }) 
    @Column({ 
      name: `${CrawlerScheduleEntity.colprefix}raw_data`,    
      type: 'text', 
      collation: 'utf8mb4_general_ci', 
      nullable: false 
    })
    @IsNotEmpty()
    raw_data?: string;

    @Field(() => DateTime, {nullable: true, description: meta.deleted.desc})
    @DeleteDateColumn({
      name: `${CrawlerScheduleEntity.colprefix}deleted`,
      type: `datetime`,
      nullable: true,
      comment: `date-time => Yes | null => No`,
    })
    @Index(`${InIndexPrefix}${CrawlerScheduleEntity.colprefix}deleted`, { unique: false })
    deleted?: Date;


    // ████ INTERNAL RELATIONS ████████████████████████████████████████████████

     @Field(() => UserEntity, {
        nullable: true, 
        description: meta.fr_users.desc,
    })
    @ManyToOne(() => UserEntity, (entity: UserEntity) => entity.fr_crawler_schedule_user)
    @JoinColumn({ name: `${CrawlerScheduleEntity.colprefix}u_id` })
    fr_users?: UserEntity;

    
    // ████ EXTERNAL RELATIONS ████████████████████████████████████████████████
}