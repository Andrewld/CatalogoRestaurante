import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'cardapio',
    loadChildren: () => import('./cardapio/cardapio.module').then( m => m.CardapioPageModule)
  },
  {
    path: 'cardapio/:categoria',
    loadChildren: () => import('./cardapio/cardapio.module').then( m => m.CardapioPageModule)
  },
  {
    path: 'cardapio/:categoria/:id',
    loadChildren: () => import('./cardapio/cardapio.module').then( m => m.CardapioPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
