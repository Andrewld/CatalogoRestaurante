import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bebidas',
  templateUrl: './bebidas.page.html',
  styleUrls: ['./bebidas.page.scss'],
})
export class BebidasPage implements OnInit {
public bebidas = [
  { nome: 'Heineken 330ml - Balde', preco: 'R$ 39,99', imgUrl: '/assets/img/bebidas/heineken-balde.jpg', descricao: ''},
  { nome: 'Chopp Brahma 500ml', preco: 'R$ 10,00', imgUrl: '/assets/img/bebidas/chopp-brahma.jpg', descricao: ''},
  { nome: 'Chopp Louvada 500ml', preco: 'R$ 12,00', imgUrl: '/assets/img/bebidas/chopp-louvada.jpg', descricao: ''},
  { nome: 'Brahma Duplo Malte 350ml', preco: 'R$ 5,00', imgUrl: '/assets/img/bebidas/brahma-duplo-malte.jpg', descricao: ''},
  { nome: 'Skol Puro Malte 350ml', preco: 'R$ 5,00', imgUrl: '/assets/img/bebidas/skol-puro-malte.jpg', descricao: ''},
  { nome: 'Água Sem Gás 498ml', preco: 'R$ 2,00', imgUrl: '/assets/img/bebidas/agua-sem-gas.jpg', descricao: ''},
  { nome: 'Água Com Gás 350ml', preco: 'R$ 3,00', imgUrl: '/assets/img/bebidas/agua-com-gas.jpg', descricao: ''},
];
  constructor() { }

  ngOnInit() {
  }

}
