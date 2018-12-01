import { Component, Input } from "@angular/core";

@Component({
    template: `
        <span class="card-title activator grey-text text-darken-4"><b>{{ titulo }}</b></span>
        <p class="card-descript center-align truncate">{{ descricao }}</p>
    `,
    styleUrls: ['./posts-description.component.scss'],
    selector: 'post-descript'
})

export class PostsDescriptionComponent{

    @Input('titulo') titulo: string; 
    @Input('description') descricao: string;

}