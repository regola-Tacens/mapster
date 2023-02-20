import { MigrationInterface, QueryRunner } from 'typeorm';

export class newmigration1676825820778 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "feed_post" ADD COLUMN postlength int`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
