import { Component, OnInit, Input } from "@angular/core";

@Component({
    selector: 'load-button',
    template: `
        <div id="div" class="row center">
            <a class="load-button btn-flat center-align" *ngIf="hasMore; else noMore"><label>Ver Mais</label></a>
        </div>

        <ng-template #noMore>
            <p class="grey-text lighten-1 center-align"><label>Nada mais a ser exibido</label></p>
        </ng-template>
    `,
    styles: [
        `
            .load-button{
                margin: 0 auto;
            }
        `
    ]
})

export class LoadButtonComponent implements OnInit{

    @Input() hasMore: boolean = false;

    ngOnInit(): void {

    }
}