import { Component, Input } from "@angular/core";


@Component({
    selector: 'vmessage',
    template: `
    <small class="right" data-error="wrong" data-success="right">
        {{ text }}
    </small>
    `
})

export class VMessageComponent{
    @Input() text: string;
}