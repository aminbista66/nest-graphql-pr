
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface Author {
    id: number;
    name?: Nullable<string>;
    posts: Nullable<Post>[];
}

export interface Book {
    id: number;
    price: number;
    title: string;
}

export interface Post {
    id: number;
    title: string;
    votes?: Nullable<number>;
}

export interface IQuery {
    author(name: string): Author[] | Promise<Author[]>;
    books(): Book[] | Promise<Book[]>;
    posts(): Post[] | Promise<Post[]>;
}

type Nullable<T> = T | null;
