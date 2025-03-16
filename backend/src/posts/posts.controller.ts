import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
    constructor (private postService: PostsService){}

    @Get()
    async getAllPosts(){
        return this.postService.getAllPost()
    }

    @Post()
    async createPost(@Body() body: {message: string, name: string}){
        return this.postService.createPost(body.message, body.name)
    }

    @Delete()
    async deletePost(){
        return this.postService.deletePosts()
    }

}
