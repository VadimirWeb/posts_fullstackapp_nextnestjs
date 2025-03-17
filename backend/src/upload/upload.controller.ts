import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { diskStorage } from "multer";
import { FileInterceptor } from '@nestjs/platform-express';
import { extname } from 'path';

@Controller('upload')
export class UploadController {
    @Post("image")
    @UseInterceptors(FileInterceptor("file", {
        storage: diskStorage({
            destination: "./uploads",
            filename: (req, file, cb) =>{
                const uniqueName = Date.now() + extname(file.originalname);
                cb(null, uniqueName);
            }
        })
    }))

    uploadFile(@UploadedFile() file: Express.Multer.File){
        return {
            url: `http://localhost:3001/uploads/${file.filename}`
        } 
    }
}
