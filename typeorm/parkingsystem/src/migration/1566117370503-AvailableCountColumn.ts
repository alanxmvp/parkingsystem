import {MigrationInterface, QueryRunner} from "typeorm";

export class AvailableCountColumn1566117370503 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "locations" ADD "available_count" int`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "locations" DROP COLUMN "available_count"`);
    }

}
