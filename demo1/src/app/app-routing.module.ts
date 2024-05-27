import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'all-page',
    loadChildren: () => import('./pages/all-page/all-page.module').then( m => m.AllPagePageModule)
  },
  {
    path: 'fast-food-page',
    loadChildren: () => import('./pages/fast-food-page/fast-food-page.module').then( m => m.FastFoodPagePageModule)
  },
  {
    path: 'sea-food-page',
    loadChildren: () => import('./pages/sea-food-page/sea-food-page.module').then( m => m.SeaFoodPagePageModule)
  },
  {
    path: 'detail/:id',
    loadChildren: () => import('./pages/detail/detail.module').then( m => m.DetailPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
