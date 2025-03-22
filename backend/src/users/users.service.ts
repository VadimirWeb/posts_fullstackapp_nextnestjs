import { Injectable } from '@nestjs/common';
import { Post, User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService){}

    async createUser(email: string, password: string, name: string): Promise<User>{
        return this.prisma.user.create({
            data: {email, password, name, description: "", imgurl: ""}
        })
    }

    async deleteUser(id: string): Promise<User>{
        return this.prisma.user.delete({
            where: {id}
        })
    }

    async deleteUsers(){
        return this.prisma.user.deleteMany()
    }

    async getUsers(): Promise<User[]> {
        return await this.prisma.user.findMany({

        });
    }

    async getPostsByUser(email: string): Promise<Post[]>{
        const user = await this.prisma.user.findUnique({
            where: { email: email },
            include: { posts: true }, // 👈 Загружаем все посты пользователя
        });

        if (!user) {
            throw new Error('User not found'); // Или `return null`
        }

        return user.posts
    }

    async getByEmail(email: string): Promise<User | null>{
        return this.prisma.user.findUnique({
            where: {email},
        })
    }

    async updateAvatar(urlAvatar: string, name: string): Promise<User | null>{
        return this.prisma.user.update({
            where: {
                name
            },
            data: {
                imgurl: urlAvatar
            }
        })
    }


}
