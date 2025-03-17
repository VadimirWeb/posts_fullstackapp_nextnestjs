import { Body, Controller, Delete, Get, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
    async createUser(@Body() body: { email: string; password: string; name: string}) {
        return this.usersService.createUser(body.email, body.password, body.name);
   }

   @Post('/updateAvatar')
   async updateAvatar(@Body() body: {urlAvatar: string, name: string}){
      return this.usersService.updateAvatar(body.urlAvatar, body.name)
   }

  @Get()
  async getAllUsers(){
    return this.usersService.getUsers()
  }

  @Get('/byEmail')
  async getByEmail(@Query("email")email: string){
    return this.usersService.getByEmail(email)
  }
  

  @Delete()
    async deleteUser(@Body() body: { id: string;}) {
        return this.usersService.deleteUser(body.id);
   }

   @Delete('all')
   async deleteUsers(){
       return this.usersService.deleteUsers()
   }

}
