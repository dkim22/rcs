import {MigrationInterface, QueryRunner} from "typeorm";

export class ListingUser1589709231892 implements MigrationInterface {
    name = 'ListingUser1589709231892'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "listings" ADD "userId" uuid`, undefined);
        await queryRunner.query(`ALTER TABLE "listings" ADD CONSTRAINT "FK_45d5c4642c4cad0229da0ec22e7" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "listings" DROP CONSTRAINT "FK_45d5c4642c4cad0229da0ec22e7"`, undefined);
        await queryRunner.query(`ALTER TABLE "listings" DROP COLUMN "userId"`, undefined);
    }

}
