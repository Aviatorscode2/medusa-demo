import { MigrationInterface, QueryRunner } from "typeorm"

export class ProductCreate1696583172383 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
               ALTER TABLE product ADD COLUMN units_sold_q1 INT DEFAULT 0;
               ALTER TABLE product ADD COLUMN units_sold_q2 INT DEFAULT 0;
               ALTER TABLE product ADD COLUMN units_sold_q3 INT DEFAULT 0;
               ALTER TABLE product ADD COLUMN units_sold_q4 INT DEFAULT 0;
           `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
               ALTER TABLE product DROP COLUMN units_sold_q1;
               ALTER TABLE product DROP COLUMN units_sold_q2;
               ALTER TABLE product DROP COLUMN units_sold_q3;
               ALTER TABLE product DROP COLUMN units_sold_q4;
           `);
    }

}
