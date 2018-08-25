import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  getDetail(){
    
  }
  trabalhos: Array<any>;

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.listar();
    console.log(this.listar);
  }

  listar(){
    this.homeService.listar().subscribe(dados => this.trabalhos = dados);
  }
}
