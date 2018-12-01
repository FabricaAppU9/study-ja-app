import { Component, OnInit, Input } from '@angular/core';
import { PostListService } from './post-list.service';

@Component({
    selector: 'post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.scss']
})

export class PostListComponent implements OnInit{

    @Input('title') title: string;

    posts: any[] = [];
    listSections: String[] = [
        'Livros',
        'Artigos'
    ];

    constructor(private postService: PostListService){ }

    ngOnInit(){
        this.listarLivros();
    }
    

    listarLivros(){
        this.postService
            .listFromPosts('LIVRO')
            .subscribe(
                posts => {
                this.posts = posts
            });
    }
}
