import {MigrationInterface, QueryRunner} from "typeorm";

export class ThirdMigration1565502900453 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "parking_lots" ADD "name" nvarchar(255)`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "parking_lots" DROP COLUMN "name"`);
    }

}
