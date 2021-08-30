import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Contact{
    @PrimaryGeneratedColumn()
    id : string;

    @Column()
    name : string;

    @Column()
    position : string;

    @Column()
    tel : string;
}