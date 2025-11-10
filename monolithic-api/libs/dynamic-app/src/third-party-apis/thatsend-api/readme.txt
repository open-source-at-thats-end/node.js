Thats End GraphQL Module Pattern (Overview + Best Practices)

Folder and file naming
- Folders use dashes: academic-degree/, academic-field/
- Files use dots: academic.degree.service.ts, academic.field.dto.ts

Shared building blocks
- Enums: thatsend.api.enum.ts (RecordSortDirectionEnum, UpsertStatusEnum)
- Types: thatsend.api.type.ts (FindOperatorDto, FindOutputPage/Pagination, SnapshotListDto)
- Typed selections: thatsend.api.select.ts (SelectShape<T>, buildSelection, buildFindMetaSelect)
- Typed where builders: thatsend.api.where.ts (ops.s | ops.n | ops.dt)

Modules and services
- Each entity has a NestJS module and service under that entity folder.
- Services map 1:1 to SDL ops:
  - Find, FindOneById
  - Create, Update, Upsert
  - SoftDelete, Delete, Restore
  - SoftRemove, Remove, Recover
- Relations are supported in filters and returned rows/affectedRows:
  - AcademicDegree ⇄ fr_academic_field
  - AcademicField ⇄ fr_academic_degrees

Importing modules
  // feature.module.ts
  import { Module } from '@nestjs/common';
  import { AcademicDegreeModule } from 'libs/dynamic-app/src/third-party-apis/thatsend-api/academic-degree/academic.degree.module';
  import { AcademicFieldModule } from 'libs/dynamic-app/src/third-party-apis/thatsend-api/academic-field/academic.field.module';
  @Module({ imports: [AcademicDegreeModule, AcademicFieldModule] })
  export class FeatureModule {}

Type-safe WHERE examples (ops.s | ops.n | ops.dt)
  import { ops } from 'libs/dynamic-app/src/third-party-apis/thatsend-api/thatsend.api.where';
  // Degrees where id = 10 and created between dates
  await degreeService.find({
    where: [
      { id: ops.n.equal(10) },
      { created: ops.dt.between('2024-01-01T00:00:00Z', new Date('2024-12-31T23:59:59Z')) },
    ],
    take: 10,
  });

Relation filters
  // Degrees whose related field title matches "Engineering"
  await degreeService.find({
    where: [{ fr_academic_field: [{ title: ops.s.like('%Engineering%') }] }],
  });
  // Fields that have at least one degree titled like "B.Sc"
  await fieldService.find({
    where: [{ fr_academic_degrees: [{ title: ops.s.like('%B.Sc%') }] }],
  });

Selecting fields (rows, entity, affectedRows)
  // Typed row selection (list)
  await degreeService.find(
    { take: 5 },
    { rowSelect: { id: true, title: true, fr_academic_field: { title: true } } }
  );

  // Typed single-entity selection (findOneById)
  await degreeService.findOneById(
    { id: 10 },
    { select: { id: true, title: true, fr_academic_field: { id: true, title: true } } }
  );

  // Typed affectedRows selection (mutations)
  await fieldService.update(
    { where: [{ title: ops.s.like('%obsolete%') }], sets: { desc: 'Updated' } },
    { affectedRowSelect: ['id', 'title'] }
  );

Meta selection (FindOutput)
  // Return only total and current page
  await fieldService.find(
    { take: 10 },
    { metaOptions: { total: true, pagination: { current: ['page', 'count'] } } }
  );

Create / Upsert
  // Create: return only id
  await degreeService.create(
    [{ acadfield_id: 1, title: 'B.Sc' }],
    { select: 'id' }
  );

  // Upsert: check process status per SDL (INSERTED/UPDATED/NOCHANGE/UNDEFINED)
  const res = await degreeService.upsert(
    [{ id: 5, acadfield_id: 1, title: 'B.Sc' }],
    { select: { id: true, title: true, upsert_process: true as unknown as string } }
  );
  console.log(res[0].upsert_process);

Auth + retry (handled internally)
- All calls obtain Authorization headers via GraphService and retry once after `checkAndRenewJwt` on JWT errors.
- Errors are redacted and thrown as BadRequestException.

Conventions and maintenance
- Keep DTOs aligned with SDL names and shapes.
- Prefer SelectShape<T> and metaOptions over raw strings for type safety.
- For new entities, replicate the pattern (module/service/dto/entity), add relations in filters + selections, and wire CRUD operations 1:1.

