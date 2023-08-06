import { getRounds, hashSync } from "bcryptjs";
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
  BeforeInsert,
  BeforeUpdate,
  OneToMany,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { nullable } from "zod";

@Entity("users")
class User {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "varchar", length: 25, unique: true })
  username: string;

  @Column({ type: "varchar", length: 127 })
  password: string;

  @Column({ type: "varchar", length: 124 })
  name: string;

  @Column({ type: "varchar", length: 127, unique: true })
  email: string | string[];

  @Column({ type: "varchar", array: true, unique: true })
  tel: string | string[];

  @CreateDateColumn({ type: "date" })
  joined_in: Date;

 @ManyToMany(() => User, (user) => user.contacts , {nullable: true, onDelete: "CASCADE"})
 @JoinTable()
 contacts: User[]

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
    const isEncrypted: number = getRounds(this.password);

    if (!isEncrypted) {
      this.password = hashSync(this.password, 10);
    }
  }
}

export { User };
