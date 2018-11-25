import { Directive, ElementRef, Renderer2, Renderer, HostListener, Input } from "@angular/core";


@Directive({
    selector: '[likeLabel]'
})

export class LikeLabelDirective{

    private nativeElement : Node;
    private inputSize: number;

    @Input('likeLabel') valorInput: String;

    constructor(private _elementRef: ElementRef, private _renderer: Renderer, private _renderer2: Renderer2){}

    ngOnInit(){      
        this.createButtonEdit();
        this.defineInputSize();
    }

    createButtonEdit(){
        this.nativeElement = this._elementRef.nativeElement;

        // Input set styles and attributes
        this._renderer2.addClass(this.nativeElement, 'input-like-label');
        this._renderer2.setAttribute(this.nativeElement,'disabled','');

        // Dynamically creates the "editbutton" element
        let isEnabled: boolean = false;
        const editLink = this._renderer2.createElement('a');
        const editLinkText = this._renderer2.createText('create');
        const editLinkComment = this._renderer2.createComment('Dynamically creates the "editbutton" element');
        const editLinkClass: string = 'material-icons';
        const editLinkSize: string = '1.0em';

        this._renderer2.appendChild(editLink, editLinkText);
        this._renderer2.appendChild(editLink, editLinkComment);
        this._renderer2.addClass(editLink, editLinkClass);
        this._renderer2.listen(editLink, 'click', (event) => {
            isEnabled = !isEnabled;
            if(isEnabled == true){
                console.log("O campo esta: ", isEnabled);
                this._renderer2.removeAttribute(this.nativeElement,'disabled','');
                this._renderer2.removeClass(this.nativeElement, 'input-like-label');
                console.log(this._elementRef.nativeElement.value);
            }else{
                console.log("O campo esta: ", isEnabled);
                this._renderer2.setAttribute(this.nativeElement,'disabled','');
                this._renderer2.addClass(this.nativeElement, 'input-like-label');
            }
        });
        this._renderer2.setStyle(editLink, 'font-size', editLinkSize);
        this._renderer2.insertBefore(this._elementRef.nativeElement.parentNode, editLink, this._elementRef.nativeElement.nextSibling);
    
    }

    defineInputSize(){
        //this.inputSize = this.valorInput.length;
        console.log(this._elementRef.nativeElement.size);
        //this._elementRef.nativeElement.size = this.inputSize - 4;
        console.log(this._elementRef.nativeElement.size);
        console.log(this.inputSize);
    }

    @HostListener('document:keydown', ['$event'])
    handleKeyboardEvent(event: KeyboardEvent) { 
        console.log("O tamanho da input é: " + this._elementRef.nativeElement.size);
        console.log("A quantidade de caractere é: " + this._elementRef.nativeElement.value.length);
        if(this._elementRef.nativeElement.size > this._elementRef.nativeElement.value.length){
            this._elementRef.nativeElement.size = this._elementRef.nativeElement.value.length;
            this._elementRef.nativeElement.size = this._elementRef.nativeElement.size + 1;
             console.log('entrou');
        }else{
            this._elementRef.nativeElement.size = this._elementRef.nativeElement.size + 1;
            console.log(this.inputSize + 1);
        }
    }

}