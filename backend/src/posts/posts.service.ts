import { Injectable } from '@nestjs/common';
import { Post } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PostsService {
    constructor(private prisma: PrismaService){}

    async createPost(message: string, name: string, title: string): Promise<Post>{
        return this.prisma.post.create({
            data: {message, name, title}
        })
    }

    async getByUid(uid: string): Promise<Post | null>{
        return this.prisma.post.findUnique({
            where: {"uid": parseInt(uid)},
        })
    }

    async deletePosts(){
        return this.prisma.post.deleteMany({})
    }

    async getAllPost(){
        return this.prisma.post.findMany()
    }
}
