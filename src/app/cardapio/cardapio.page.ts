import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.page.html',
  styleUrls: ['./cardapio.page.scss'],
})
export class CardapioPage implements OnInit {

  public cardapio = [
    { id: 1, categoria: 'bebidas', tipo: 'Bebida', nome: 'Heineken 330ml - Balde', preco: 'R$ 39,99', imgUrl: '/assets/img/bebidas/heineken-balde.jpg', descricao: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati omnis pariatur, consequatur molestias illum tempora qui nihil voluptas, dolore maxime at, voluptatem ad modi ex dicta autem quas iure. Quo!'},
    { id: 2, categoria: 'bebidas', tipo: 'Bebida', nome: 'Chopp Brahma 500ml', preco: 'R$ 10,00', imgUrl: '/assets/img/bebidas/chopp-brahma.jpg', descricao: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati omnis pariatur, consequatur molestias illum tempora qui nihil voluptas, dolore maxime at, voluptatem ad modi ex dicta autem quas iure. Quo!'},
    { id: 3, categoria: 'bebidas', tipo: 'Bebida', nome: 'Chopp Louvada 500ml', preco: 'R$ 12,00', imgUrl: '/assets/img/bebidas/chopp-louvada.jpg', descricao: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati omnis pariatur, consequatur molestias illum tempora qui nihil voluptas, dolore maxime at, voluptatem ad modi ex dicta autem quas iure. Quo!'},
    { id: 4, categoria: 'bebidas', tipo: 'Bebida', nome: 'Brahma Duplo Malte 350ml', preco: 'R$ 5,00', imgUrl: '/assets/img/bebidas/brahma-duplo-malte.jpg', descricao: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati omnis pariatur, consequatur molestias illum tempora qui nihil voluptas, dolore maxime at, voluptatem ad modi ex dicta autem quas iure. Quo!'},
    { id: 5, categoria: 'bebidas', tipo: 'Bebida', nome: 'Skol Puro Malte 350ml', preco: 'R$ 5,00', imgUrl: '/assets/img/bebidas/skol-puro-malte.jpg', descricao: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati omnis pariatur, consequatur molestias illum tempora qui nihil voluptas, dolore maxime at, voluptatem ad modi ex dicta autem quas iure. Quo!'},
    { id: 6, categoria: 'bebidas', tipo: 'Bebida', nome: 'Água Sem Gás 498ml', preco: 'R$ 2,00', imgUrl: '/assets/img/bebidas/agua-sem-gas.jpg', descricao: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati omnis pariatur, consequatur molestias illum tempora qui nihil voluptas, dolore maxime at, voluptatem ad modi ex dicta autem quas iure. Quo!'},
    { id: 7, categoria: 'bebidas', tipo: 'Bebida', nome: 'Água Com Gás 350ml', preco: 'R$ 3,00', imgUrl: '/assets/img/bebidas/agua-com-gas.jpg', descricao: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati omnis pariatur, consequatur molestias illum tempora qui nihil voluptas, dolore maxime at, voluptatem ad modi ex dicta autem quas iure. Quo!'},

    { id: 8, categoria: 'lanches', tipo: 'Lanche', nome: 'Hamburguer De Carne', preco: 'R$ 29,99', imgUrl: '/assets/img/lanches/hamburguer.jpg', descricao: 'pão, hambúrguer artesanal, alface, tomate, queijo cheddar.'},
    { id: 9, categoria: 'lanches', tipo: 'Lanche', nome: 'Cachorro Quente', preco: 'R$ 15,99', imgUrl: '/assets/img/lanches/cachorro-quente.jpg', descricao: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati omnis pariatur, consequatur molestias illum tempora qui nihil voluptas, dolore maxime at, voluptatem ad modi ex dicta autem quas iure. Quo!'},
    { id: 10, categoria: 'lanches', tipo: 'Lanche', nome: 'Coxinhas de Frango', preco: 'R$ 19,99', imgUrl: '/assets/img/lanches/coxinha-de-frango.jpg', descricao: '(8 unidades) massa de mandioca e frango.'},
    { id: 11, categoria: 'lanches', tipo: 'Lanche', nome: 'Pastéis de Carne', preco: 'R$ 39,99', imgUrl: '/assets/img/lanches/pasteizinhos-de-carne.jpg', descricao: '(5 unidades) carne, '},
    { id: 12, categoria: 'lanches', tipo: 'Lanche', nome: 'Panqueca de Carne', preco: 'R$ 16,99', imgUrl: '/assets/img/lanches/panqueca.jpg', descricao: 'massa, carne moída, molho de tomate artesanal e queijo prato.'},

    { id: 13, categoria: 'pratos', tipo: 'Entrada', nome: 'Batata Frita com Cheddar e Bacon', preco: 'R$ 29,99', imgUrl: '/assets/img/pratos/entrada/batata-frita-com-cheddar-e-bacon.jpg', descricao: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati omnis pariatur, consequatur molestias illum tempora qui nihil voluptas, dolore maxime at, voluptatem ad modi ex dicta autem quas iure. Quo!'},
    { id: 14, categoria: 'pratos', tipo: 'Entrada', nome: 'Bolinho de Costela', preco: 'R$ 15,99', imgUrl: '/assets/img/pratos/entrada/bolinho-costela.jpg', descricao: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati omnis pariatur, consequatur molestias illum tempora qui nihil voluptas, dolore maxime at, voluptatem ad modi ex dicta autem quas iure. Quo!'},
    { id: 15, categoria: 'pratos', tipo: 'Entrada', nome: 'Onion Rings', preco: 'R$ 14,99', imgUrl: '/assets/img/pratos/entrada/onion-rings.jpg', descricao: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati omnis pariatur, consequatur molestias illum tempora qui nihil voluptas, dolore maxime at, voluptatem ad modi ex dicta autem quas iure. Quo!'},
    { id: 16, categoria: 'pratos', tipo: 'Entrada', nome: 'Patinha de Carangueijo à Milanesa', preco: 'R$ 25,99', imgUrl: '/assets/img/pratos/entrada/patinha-de-carangueijo-a-milanesa.jpg', descricao: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati omnis pariatur, consequatur molestias illum tempora qui nihil voluptas, dolore maxime at, voluptatem ad modi ex dicta autem quas iure. Quo!'},
    { id: 17, categoria: 'pratos', tipo: 'Entrada', nome: 'Tábua de Frios', preco: 'R$ 59,99', imgUrl: '/assets/img/pratos/entrada/tabua-de-frios.jpg', descricao: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati omnis pariatur, consequatur molestias illum tempora qui nihil voluptas, dolore maxime at, voluptatem ad modi ex dicta autem quas iure. Quo!'},

    { id: 18, categoria: 'pratos', tipo: 'Refeição', nome: 'Lasanha Bolonhesa', preco: 'R$ 25,99', imgUrl: '/assets/img/pratos/refeicao/lasanha-bolonhesa.jpg', descricao: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati omnis pariatur, consequatur molestias illum tempora qui nihil voluptas, dolore maxime at, voluptatem ad modi ex dicta autem quas iure. Quo!'},
    { id: 19, categoria: 'pratos', tipo: 'Refeição', nome: 'Carbonara', preco: 'R$ 39,99', imgUrl: '/assets/img/pratos/refeicao/carbonara.jpg', descricao: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati omnis pariatur, consequatur molestias illum tempora qui nihil voluptas, dolore maxime at, voluptatem ad modi ex dicta autem quas iure. Quo!'},
    { id: 20, categoria: 'pratos', tipo: 'Refeição', nome: 'Costelinha de Porco ao Molho Barbecue', preco: 'R$ 110,99', imgUrl: '/assets/img/pratos/refeicao/costelinha-de-porco-ao-molho-barbecue.jpg', descricao: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati omnis pariatur, consequatur molestias illum tempora qui nihil voluptas, dolore maxime at, voluptatem ad modi ex dicta autem quas iure. Quo!'},
    { id: 21, categoria: 'pratos', tipo: 'Refeição', nome: 'Moqueca de Camarão', preco: 'R$ 119,99', imgUrl: '/assets/img/pratos/refeicao/moqueca-de-camarão.jpg', descricao: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati omnis pariatur, consequatur molestias illum tempora qui nihil voluptas, dolore maxime at, voluptatem ad modi ex dicta autem quas iure. Quo!'},
    { id: 22, categoria: 'pratos', tipo: 'Refeição', nome: 'Picanha na Chapa', preco: 'R$ 159,99', imgUrl: '/assets/img/pratos/refeicao/picanha-na-chapa.jpg', descricao: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati omnis pariatur, consequatur molestias illum tempora qui nihil voluptas, dolore maxime at, voluptatem ad modi ex dicta autem quas iure. Quo!'},

    { id: 23, categoria: 'sobremesas', tipo: 'Sobremesa', nome: 'Banana Split', preco: 'R$ 15,99', imgUrl:'/assets/img/sobremesas/banana-split.jpg', descricao: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati omnis pariatur, consequatur molestias illum tempora qui nihil voluptas, dolore maxime at, voluptatem ad modi ex dicta autem quas iure. Quo!' },
    { id: 24, categoria: 'sobremesas', tipo: 'Sobremesa', nome: 'Banoffee', preco: 'R$ 22,99', imgUrl:'/assets/img/sobremesas/banoffee.png', descricao: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati omnis pariatur, consequatur molestias illum tempora qui nihil voluptas, dolore maxime at, voluptatem ad modi ex dicta autem quas iure. Quo!' },
    { id: 25, categoria: 'sobremesas', tipo: 'Sobremesa', nome: 'Cheesecake', preco: 'R$ 35,99', imgUrl:'/assets/img/sobremesas/cheesecake.jpg', descricao: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati omnis pariatur, consequatur molestias illum tempora qui nihil voluptas, dolore maxime at, voluptatem ad modi ex dicta autem quas iure. Quo!' },
    { id: 26, categoria: 'sobremesas', tipo: 'Sobremesa', nome: 'Petit Gateau', preco: 'R$ 26,99', imgUrl:'/assets/img/sobremesas/petit-gateau.jpg', descricao: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati omnis pariatur, consequatur molestias illum tempora qui nihil voluptas, dolore maxime at, voluptatem ad modi ex dicta autem quas iure. Quo!' },
    { id: 27, categoria: 'sobremesas', tipo: 'Sobremesa', nome: 'Pudim de Leite Condensado', preco: 'R$ 9,99', imgUrl:'/assets/img/sobremesas/pudim-leite-condensado.jpg', descricao: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati omnis pariatur, consequatur molestias illum tempora qui nihil voluptas, dolore maxime at, voluptatem ad modi ex dicta autem quas iure. Quo!' },
    
    { id: 28, categoria: 'caseirinho', tipo: 'Prato do dia', nome: 'Combo: Onion Rings, Lasanha Bolonhesa e Banoffee', preco: 'R$ 49,99', 
      imgUrl:[{src: '/assets/img/pratos/entrada/onion-rings.jpg'}, {src: '/assets/img/pratos/refeicao/lasanha-bolonhesa.jpg'}, {src: '/assets/img/sobremesas/banoffee.png'}]
      , descricao: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod unde assumenda dolorem aliquid id possimus iusto aspernatur natus recusandae molestiae optio nesciunt, rem fuga facilis, excepturi provident perferendis culpa consequatur?' }
  ];
  
  categoria = null;
  id = null;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.categoria = this.activatedRoute.snapshot.paramMap.get('categoria');
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
  }

  buscarCardapioPorCategoria(categoriaNaUrl){
    return this.cardapio.filter(x => x.categoria == categoriaNaUrl)
  }

  obterItemDoCardapio(itemId){
    return this.cardapio.filter(x => x.id == itemId)
  }


}
