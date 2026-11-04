import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('faculties')
export class Faculty {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  expertise: string;

  @Column({ type: 'int' })
  noOfPublication: number;
}
















