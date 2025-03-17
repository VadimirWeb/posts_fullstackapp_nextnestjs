import { Body, Controller, Delete, Get, Post, Query } from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
    constructor (private postService: PostsService){}

    @Get()
    async getAllPosts(){
        return this.postService.getAllPost()
    }

    @Get('/byUid')
      async getByUid(@Query("uid")uid: string){
        return this.postService.getByUid(uid)
      }

    @Post()
    async createPost(@Body() body: {message: string, name: string, title: string}){
        return this.postService.createPost(body.message, body.name, body.title)
    }

    @Delete()
    async deletePost(){
        return this.postService.deletePosts()
    }

}
