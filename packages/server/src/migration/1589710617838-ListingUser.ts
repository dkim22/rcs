import {MigrationInterface, QueryRunner} from "typeorm";

export class ListingUser1589710617838 implements MigrationInterface {
    name = 'ListingUser1589710617838'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "listings" ADD "category" character varying(100) NOT NULL`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "listings" DROP COLUMN "category"`, undefined);
    }

}
