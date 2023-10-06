import { Column, Entity } from "typeorm"
import {
  // alias the core entity to not cause a naming conflict
  Product as MedusaProduct,
} from "@medusajs/medusa"

@Entity()
export class Product extends MedusaProduct {
  @Column()
  units_sold_q1: number

  @Column()
  units_sold_q2: number

  @Column()
  units_sold_q3: number

  @Column()
  units_sold_q4: number
}