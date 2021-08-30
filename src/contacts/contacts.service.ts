import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Contact } from './entities/contacts.entity';

@Injectable()
export class ContactsService {
    constructor(
        @InjectRepository(Contact)
        private contactRepository : Repository<Contact>
    ){};

    findAll() : Promise<Contact[]>{
        return this.contactRepository.find();
    }

    findOne(id:number) : Promise<Contact>{
        return this.contactRepository.findOne(id);
    }

    create(name: string, position : string, tel : string){
        const contact = {
            name, position, tel
        }
        return this.contactRepository.save(contact);
    }

    async remove(id:number) : Promise<void>{
        await this.contactRepository.delete(id);
    }

    async update(id:number, name :string, position : string, tel : string):Promise<Contact>{
        const contact = await this.contactRepository.findOne(id);
        contact.name = name;
        contact.position = position;
        contact.tel = tel;

        return this.contactRepository.save(contact);
    }
}
