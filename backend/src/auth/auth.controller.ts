import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth')
export class AuthController {
    constructor (private authSevice: AuthService){}

    @Post('login')
    async login(@Body() body: {email: string, name: string, password: string}){
        const email = body.email 
        const name = body.name 
        const token = await this.authSevice.generateToken(email, name);

        return {token}
    }

    @Get('profile')
    @UseGuards(JwtAuthGuard)
    getProfile(@Req() req) {
      return req.user; 
    }

}
