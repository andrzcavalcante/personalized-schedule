import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { getRounds, hashSync } from "bcrypt";
import { Contact } from "./contact.entitie";
@Entity("users")
class User {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ length: 120 })
  full_name: string;

  @Column({ unique: true })
  email: string;

  @Column({ type: "int" })
  phone: number;

  @Column()
  password: string;

  @CreateDateColumn({ type: "date" })
  createdAt: string;

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
    const isEncripted = getRounds(this.password);

    if (!isEncripted) {
      this.password = hashSync(this.password, 10);
    }
  }

  @OneToMany(()=> Contact, contact => contact.user)
  contacts: Contact[]
}

export { User };
