import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany,
  BeforeInsert
} from 'typeorm'
import { Schedule } from './schedules.entity'
import { getRounds, hashSync } from 'bcryptjs'

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column({ type: 'varchar', length: 45 })
  name: string

  @Column({ type: 'varchar', length: 45, unique: true })
  email: string

  @Column({ type: 'boolean', default: false })
  admin: boolean

  @Column({ type: 'varchar', length: 120 })
  password: string

  @CreateDateColumn({ type: 'date' })
  createdAt: string

  @UpdateDateColumn({ type: 'date' })
  updatedAt: string

  @DeleteDateColumn({ type: 'date' })
  deletedAt: string 

  @OneToMany(() => Schedule, Schedule => Schedule.user)
  schedule: Schedule

  @BeforeInsert()
  hashPassword(){
    const pass = getRounds(this.password)
    if(!pass){
      this.password = hashSync(this.password, 8)
    }
  }
}
