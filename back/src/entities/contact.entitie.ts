import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne } from "typeorm";
import { User } from "./users.entitie";

@Entity("contacts")
class Contact {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ length: 120 })
  full_name: string;

  @Column()
  email: string;

  @Column({ type: "int" })
  phone: number;

  @CreateDateColumn({ type: "date" })
  createdAt: string;

  @ManyToOne(()=> User)
  user: User
}

export { Contact }
