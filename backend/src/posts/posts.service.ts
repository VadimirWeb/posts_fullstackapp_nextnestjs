import { Injectable } from '@nestjs/common';
import { Post } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PostsService {
    constructor(private prisma: PrismaService){}

    async createPost(message: string, name: string): Promise<Post>{
        return this.prisma.post.create({
            data: {message, name}
        })
    }

    async deletePosts(){
        return this.prisma.post.deleteMany({})
    }

    async getAllPost(){
        return this.prisma.post.findMany()
    }
}
