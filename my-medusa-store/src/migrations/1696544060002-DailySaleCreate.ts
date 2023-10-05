import { MigrationInterface, QueryRunner } from "typeorm"

export class DailySaleCreate1696544060002 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
               CREATE TABLE daily_sales (
                   id SERIAL PRIMARY KEY,
                   date DATE NOT NULL,
                   units_sold INT NOT NULL
               )
           `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE daily_sales`);
    }

}
