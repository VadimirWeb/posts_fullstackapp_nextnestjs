import { Injectable } from '@nestjs/common';
import { Post, User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PostsService {
    constructor(private prisma: PrismaService){}

    async createPost(message: string, name: string, title: string): Promise<User>{
        const attachedUser = this.prisma.user.findUnique({ where: {name}})

        const post = this.prisma.user.update({
            where: {name},
            data: {
                posts: {
                    create: {
                        title: title,
                        message: message,
                        name: name
                    }
                }
            },
            include: {
                posts: true
            }
        })

        return post
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
