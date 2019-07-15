import {MigrationInterface, QueryRunner} from "typeorm";

export class SecondMigration1563182200620 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "logs" ("id" int NOT NULL IDENTITY(1,1), "datetime_Created" datetime NOT NULL, "status" int NOT NULL, "lot_id" int, CONSTRAINT "PK_fb1b805f2f7795de79fa69340ba" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "parking_lots" ("id" int NOT NULL IDENTITY(1,1), "status" int NOT NULL, "location_id" int, "user_id" int, CONSTRAINT "PK_27af37fbf2f9f525c1db6c20a48" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "locations" ("id" int NOT NULL IDENTITY(1,1), "label" nvarchar(255) NOT NULL, "total" int NOT NULL, CONSTRAINT "PK_7cc1c9e3853b94816c094825e74" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "logs" ADD CONSTRAINT "FK_5baf2cd7668f7180834eb97f92d" FOREIGN KEY ("lot_id") REFERENCES "parking_lots"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "parking_lots" ADD CONSTRAINT "FK_6baa93c2d4d3ed166f2734e6f19" FOREIGN KEY ("location_id") REFERENCES "locations"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "parking_lots" ADD CONSTRAINT "FK_0586116de27cc9f5ad15473b2b8" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "parking_lots" DROP CONSTRAINT "FK_0586116de27cc9f5ad15473b2b8"`);
        await queryRunner.query(`ALTER TABLE "parking_lots" DROP CONSTRAINT "FK_6baa93c2d4d3ed166f2734e6f19"`);
        await queryRunner.query(`ALTER TABLE "logs" DROP CONSTRAINT "FK_5baf2cd7668f7180834eb97f92d"`);
        await queryRunner.query(`DROP TABLE "locations"`);
        await queryRunner.query(`DROP TABLE "parking_lots"`);
        await queryRunner.query(`DROP TABLE "logs"`);
    }

}
