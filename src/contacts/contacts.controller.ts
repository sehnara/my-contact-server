import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { Contact } from './entities/contacts.entity';

@Controller('contacts')
export class ContactsController {
    constructor (private contactService : ContactsService){}

    @Get()
    findAll() : Promise<Contact[]>{
        return this.contactService.findAll();
    }

    @Get(":id")
    findOne(@Param("id") id:number):Promise<Contact>{
        return this.contactService.findOne(id);
    }

    @Post()
    async create(@Body() 
    {name, position, tel} : {name:string, position : string, tel : string}):Promise<Contact>{
        return this.contactService.create(name, position, tel);
    }

    @Delete(":id")
    async remove(@Param("id") id:number){
        return this.contactService.remove(id);
    }

    @Put(":id")
    async update(
        @Param("id") id:number, 
        @Body(){name, position, tel} : {name:string, position : string, tel : string}):Promise<Contact>{
            return this.contactService.update(id, name, position, tel);
        }

}
