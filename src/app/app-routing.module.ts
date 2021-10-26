import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'lanches',
    loadChildren: () => import('./cardapio/lanches/lanches.module').then( m => m.LanchesPageModule)
  },
  {
    path: 'pratos',
    loadChildren: () => import('./cardapio/pratos/pratos.module').then( m => m.PratosPageModule)
  },
  {
    path: 'sobremesas',
    loadChildren: () => import('./cardapio/sobremesas/sobremesas.module').then( m => m.SobremesasPageModule)
  },
  {
    path: 'bebidas',
    loadChildren: () => import('./cardapio/bebidas/bebidas.module').then( m => m.BebidasPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
