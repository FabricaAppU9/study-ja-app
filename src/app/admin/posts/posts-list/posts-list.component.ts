import { Component, EventEmitter } from "@angular/core";
import { PostsListService } from './posts-list.service';
import { PostListService } from "../../../user/home/post-list/post-list.service";
import { post } from "selenium-webdriver/http";

@Component({
    selector: 'posts-list',
    templateUrl: './posts-list.component.html',
    styleUrls: ['./posts-list.component.scss']
})

export class PostsListComponent{
    posts: any[] = [];

    constructor(private postList: PostListService){}

    /*
    ngOnInit(){
        this.listaPosts();
    }

    listaPosts(){
        this.postList
                .listFromPosts("livro")
                .subscribe(
                        posts => {
                        this.posts = posts
                        }
                    );
    }
    */
}