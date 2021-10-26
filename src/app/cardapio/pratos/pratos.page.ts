import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pratos',
  templateUrl: './pratos.page.html',
  styleUrls: ['./pratos.page.scss'],
})
export class PratosPage implements OnInit {
public pratosDeEntrada =[
  { nome: 'Batata Frita com Cheddar e Bacon', preco: 'R$ 29,99', imgUrl: '/assets/img/pratos/entrada/batata-frita-com-cheddar-e-bacon.jpg', descricao: ''},
  { nome: 'Bolinho de Costela', preco: 'R$ 15,99', imgUrl: '/assets/img/pratos/entrada/bolinho-costela.jpg', descricao: ''},
  { nome: 'Onion Rings', preco: 'R$ 14,99', imgUrl: '/assets/img/pratos/entrada/onion-rings.jpg', descricao: ''},
  { nome: 'Patinha de Carangueijo à Milanesa', preco: 'R$ 25,99', imgUrl: '/assets/img/pratos/entrada/patinha-de-carangueijo-a-milanesa.jpg', descricao: ''},
  { nome: 'Tábua de Frios', preco: 'R$ 59,99', imgUrl: '/assets/img/pratos/entrada/tabua-de-frios.jpg', descricao: ''}
];

public pratosDeRefeicao =[
  { nome: 'Lasanha Bolonhesa', preco: 'R$ 25,99', imgUrl: '/assets/img/pratos/refeicao/lasanha-bolonhesa.jpg', descricao: ''},
  { nome: 'Carbonara', preco: 'R$ 39,99', imgUrl: '/assets/img/pratos/refeicao/carbonara.jpg', descricao: ''},
  { nome: 'Costelinha de Porco ao Molho Barbecue', preco: 'R$ 110,99', imgUrl: '/assets/img/pratos/refeicao/costelinha-de-porco-ao-molho-barbecue.jpg', descricao: ''},
  { nome: 'Moqueca de Camarão', preco: 'R$ 119,99', imgUrl: '/assets/img/pratos/refeicao/moqueca-de-camarão.jpg', descricao: ''},
  { nome: 'Picanha na Chapa', preco: 'R$ 159,99', imgUrl: '/assets/img/pratos/refeicao/picanha-na-chapa.jpg', descricao: ''}
];
  constructor() { }

  ngOnInit() {
  }

}