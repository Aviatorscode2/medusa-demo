   import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

   @Entity("daily_sales")
   class DailySale {
     @PrimaryGeneratedColumn()
     id: number;

     @Column()
     date: Date;

     @Column()
     units_sold: number;
   }
