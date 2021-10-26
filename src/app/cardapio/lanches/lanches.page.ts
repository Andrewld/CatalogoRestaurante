import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lanches',
  templateUrl: './lanches.page.html',
  styleUrls: ['./lanches.page.scss'],
})
export class LanchesPage implements OnInit {
public lanches = [
  {id: '1', nome: 'Hamburguer De Carne', preco: 'R$ 29,99', imgUrl: '/assets/img/lanches/hamburguer.jpg', descricao: 'pão, hambúrguer artesanal, alface, tomate, queijo cheddar.'},
  {id: '2', nome: 'Cachorro Quente', preco: 'R$ 15,99', imgUrl: '/assets/img/lanches/cachorro-quente.jpg', descricao: 'pão, hambúrguer artesanal, bacon, alface, tomate e queijo cheddar.'},
  {id: '3', nome: 'Coxinhas de Frango', preco: 'R$ 19,99', imgUrl: '/assets/img/lanches/coxinha-de-frango.jpg', descricao: '(8 unidades) massa de mandioca e frango.'},
  {id: '4', nome: 'Pastéis de Carne', preco: 'R$ 39,99', imgUrl: '/assets/img/lanches/pasteizinhos-de-carne.jpg', descricao: '(5 unidades) carne, '},
  {id: '5', nome: 'Panqueca de Carne', preco: 'R$ 16,99', imgUrl: '/assets/img/lanches/panqueca.jpg', descricao: 'massa, carne moída, molho de tomate artesanal e queijo prato.'}
];
  constructor() { }

  ngOnInit() {
  }

}
