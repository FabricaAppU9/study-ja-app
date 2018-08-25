import { Component, Input } from "@angular/core";


@Component({
    selector: 'vmessage',
    template: `
    <span class="helper-text right-align red-text lighten-1" data-error="wrong" data-success="right">
        {{ text }}
    </span>  
    `
})

export class VMessageComponent{
    @Input() text: string;
}