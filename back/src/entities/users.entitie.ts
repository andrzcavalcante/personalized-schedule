import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Contact } from "./contact.entitie";
@Entity("users")
class User {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ length: 120 })
  full_name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  phone: string;

  @Column()
  password: string;

  @CreateDateColumn({nullable: true})
  createdAt: Date;


  @OneToMany(()=> Contact, contact => contact.user, { eager: true })
  contacts: Contact[]
}

export { User };
