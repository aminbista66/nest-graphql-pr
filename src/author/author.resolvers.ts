import {
  Args,
  Int,
  Parent,
  Query,
  ResolveField,
  Resolver,
  
} from '@nestjs/graphql';
import { Author } from './models/author.model';
import { Post } from './models/post.model';
import { AuthorService } from './author.service';
import { PostService } from './post.service';
import { Book } from './models/book.model';

@Resolver(of => Author)
export class AuthorsResolver {
  constructor(
    private authorsService: AuthorService,
    private postsService: PostService,
  ) {}

  @Query((returns) => [Author], { name: 'author' })
  async getAuthor(@Args('name', { type: () => String }) name: string) {
    console.log('name', name);
    return this.authorsService.findOneById(name);
  }

  @ResolveField('posts', (returns) => [Post])
  async posts(@Parent() author: Author) {
    const { id } = author;
    return this.postsService.findAll({ authorId: id });
  }

  @Query((returns) => [Post], { name: 'posts' })
  async getPosts() {
    return this.postsService.getAllPosts();
  }

  @Query((returns) => [Book], { name: 'books' })
  async getBook() {
    return [
      { id: 1, title: 'NestJS is awesome!', price: 10 },
      { id: 2, title: 'GraphQL is cool!', price: 5 },
    ];
  }
}
