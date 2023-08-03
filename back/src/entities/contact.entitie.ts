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

  @Column()
  phone: string;

  @CreateDateColumn({nullable: true})
  createdAt: Date;

  @ManyToOne((type) => User, (user) => user.contacts, { onDelete: "CASCADE" })
  user: User
}

export { Contact }
