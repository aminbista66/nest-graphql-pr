import { Module } from '@nestjs/common';
import { AuthorsResolver } from './author.resolvers';
import { AuthorService } from './author.service';
import { PostService } from './post.service';

@Module({
    imports: [],
    controllers: [],
    providers: [AuthorsResolver, AuthorService, PostService],
})
export class AuthorModule {}
