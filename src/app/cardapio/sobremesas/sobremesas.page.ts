import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobremesas',
  templateUrl: './sobremesas.page.html',
  styleUrls: ['./sobremesas.page.scss'],
})
export class SobremesasPage implements OnInit{
  public sobremesas = [
    { nome: 'Banana Split', preco: 'R$ 15,99', imgUrl:'/assets/img/sobremesas/banana-split.jpg', descricao: '' },
    { nome: 'Banoffee', preco: 'R$ 22,99', imgUrl:'/assets/img/sobremesas/banoffee.png', descricao: '' },
    { nome: 'Cheesecake', preco: 'R$ 35,99', imgUrl:'/assets/img/sobremesas/cheesecake.jpg', descricao: '' },
    { nome: 'Petit Gateau', preco: 'R$ 26,99', imgUrl:'/assets/img/sobremesas/petit-gateau.jpg', descricao: '' },
    { nome: 'Banana Split', preco: 'R$ 9,99', imgUrl:'/assets/img/sobremesas/pudim-leite-condensado.jpg', descricao: '' }
  ];
  constructor() { }

  ngOnInit(){

  }
}





