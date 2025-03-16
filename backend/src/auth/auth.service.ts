import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private jwtService: JwtService ){}

    async generateToken(email: string, name: string){
        const payload = {email, name}
        return this.jwtService.sign( payload )
    }
}
