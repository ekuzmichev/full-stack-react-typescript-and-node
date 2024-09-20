import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { Length } from "class-validator";

@Entity({ name: "Users" })
export class User {
  @PrimaryGeneratedColumn({ name: "id", type: "bigint" })
  id: string;

  @Column("varchar", {
    name: "email",
    length: 120,
    unique: true,
    nullable: false,
  })
  email: string;

  @Column("varchar", {
    name: "username",
    length: 60,
    unique: true,
    nullable: false,
  })
  username: string;

  @Column("varchar", {
    name: "password",
    length: 100,
    nullable: false,
  })
  @Length(8, 100)
  password: string;

  @Column("boolean", {
    name: "confirmed",
    default: false,
    nullable: false,
  })
  confirmed: boolean;

  @Column("boolean", {
    name: "disabled",
    default: false,
    nullable: false,
  })
  disabled: boolean;
}
