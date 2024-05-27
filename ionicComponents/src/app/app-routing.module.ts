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
    path: 'sample-page1',
    loadChildren: () => import('./pages/sample-page1/sample-page1.module').then( m => m.SamplePage1PageModule)
  },
  {
    path: 'sample-page2',
    loadChildren: () => import('./pages/sample-page2/sample-page2.module').then( m => m.SamplePage2PageModule)
  },
  {
    path: 'sample-page3',
    loadChildren: () => import('./pages/sample-page3/sample-page3.module').then( m => m.SamplePage3PageModule)
  },
  {
    path: 'sample-page4',
    loadChildren: () => import('./pages/sample-page4/sample-page4.module').then( m => m.SamplePage4PageModule)
  },
  {
    path: 'exercise1',
    loadChildren: () => import('./pages/exercise1/exercise1.module').then( m => m.Exercise1PageModule)
  },
  {
    path: 'exercise4',
    loadChildren: () => import('./pages/exercise4/exercise4.module').then( m => m.Exercise4PageModule)
  },
  {
    path: 'sample-page5',
    loadChildren: () => import('./pages/sample-page5/sample-page5.module').then( m => m.SamplePage5PageModule)
  },
  {
    path: 'sample-page6',
    loadChildren: () => import('./pages/sample-page6/sample-page6.module').then( m => m.SamplePage6PageModule)
  },
  {
    path: 'sample-page8',
    loadChildren: () => import('./pages/sample-page8/sample-page8.module').then( m => m.SamplePage8PageModule)
  },
  {
    path: 'exercise6',
    loadChildren: () => import('./pages/exercise6/exercise6.module').then( m => m.Exercise6PageModule)
  },
  {
    path: 'sample-page12',
    loadChildren: () => import('./pages/sample-page12/sample-page12.module').then( m => m.SamplePage12PageModule)
  },
  {
    path: 'sample-page13',
    loadChildren: () => import('./pages/sample-page13/sample-page13.module').then( m => m.SamplePage13PageModule)
  },
  {
    path: 'sample-page14',
    loadChildren: () => import('./pages/sample-page14/sample-page14.module').then( m => m.SamplePage14PageModule)
  },
  {
    path: 'sample-page15',
    loadChildren: () => import('./pages/sample-page15/sample-page15.module').then( m => m.SamplePage15PageModule)
  },
  {
    path: 'sample-page16',
    loadChildren: () => import('./pages/sample-page16/sample-page16.module').then( m => m.SamplePage16PageModule)
  },
  {
    path: 'exercise7',
    loadChildren: () => import('./pages/exercise7/exercise7.module').then( m => m.Exercise7PageModule)
  },
  {
    path: 'sample-page17',
    loadChildren: () => import('./pages/sample-page17/sample-page17.module').then( m => m.SamplePage17PageModule)
  },
  {
    path: 'sample-page18',
    loadChildren: () => import('./pages/sample-page18/sample-page18.module').then( m => m.SamplePage18PageModule)
  },
  {
    path: 'sample-page19',
    loadChildren: () => import('./pages/sample-page19/sample-page19.module').then( m => m.SamplePage19PageModule)
  },
  {
    path: 'sample-page20',
    loadChildren: () => import('./pages/sample-page20/sample-page20.module').then( m => m.SamplePage20PageModule)
  },
  {
    path: 'sample-page21',
    loadChildren: () => import('./pages/sample-page21/sample-page21.module').then( m => m.SamplePage21PageModule)
  },
  {
    path: 'sample-page23',
    loadChildren: () => import('./pages/sample-page23/sample-page23.module').then( m => m.SamplePage23PageModule)
  },
  {
    path: 'exercise9',
    loadChildren: () => import('./pages/exercise9/exercise9.module').then( m => m.Exercise9PageModule)
  },  {
    path: 'sample-page25',
    loadChildren: () => import('./pages/sample-page25/sample-page25.module').then( m => m.SamplePage25PageModule)
  },
  {
    path: 'sample-page28',
    loadChildren: () => import('./pages/sample-page28/sample-page28.module').then( m => m.SamplePage28PageModule)
  },
  {
    path: 'exercise12',
    loadChildren: () => import('./pages/exercise12/exercise12.module').then( m => m.Exercise12PageModule)
  },
  {
    path: 'exercise13',
    loadChildren: () => import('./pages/exercise13/exercise13.module').then( m => m.Exercise13PageModule)
  },
  {
    path: 'sample-page30',
    loadChildren: () => import('./pages/sample-page30/sample-page30.module').then( m => m.SamplePage30PageModule)
  },
  {
    path: 'sample-page33',
    loadChildren: () => import('./pages/sample-page33/sample-page33.module').then( m => m.SamplePage33PageModule)
  },
  {
    path: 'exercise15',
    loadChildren: () => import('./pages/exercise15/exercise15.module').then( m => m.Exercise15PageModule)
  },
  {
    path: 'sample-page38',
    loadChildren: () => import('./pages/sample-page38/sample-page38.module').then( m => m.SamplePage38PageModule)
  },
  {
    path: 'sample-page42',
    loadChildren: () => import('./pages/sample-page42/sample-page42.module').then( m => m.SamplePage42PageModule)
  },
  {
    path: 'sample-page46',
    loadChildren: () => import('./pages/sample-page46/sample-page46.module').then( m => m.SamplePage46PageModule)
  },
  {
    path: 'sample-page48',
    loadChildren: () => import('./pages/sample-page48/sample-page48.module').then( m => m.SamplePage48PageModule)
  },
  {
    path: 'exercise18',
    loadChildren: () => import('./pages/exercise18/exercise18.module').then( m => m.Exercise18PageModule)
  },
  {
    path: 'exercise19',
    loadChildren: () => import('./pages/exercise19/exercise19.module').then( m => m.Exercise19PageModule)
  },
  {
    path: 'sample-page53',
    loadChildren: () => import('./pages/sample-page53/sample-page53.module').then( m => m.SamplePage53PageModule)
  },
  {
    path: 'exercise20',
    loadChildren: () => import('./pages/exercise20/exercise20.module').then( m => m.Exercise20PageModule)
  },
  {
    path: 'sample-page54',
    loadChildren: () => import('./pages/sample-page54/sample-page54.module').then( m => m.SamplePage54PageModule)
  },
  {
    path: 'sample-page55',
    loadChildren: () => import('./pages/sample-page55/sample-page55.module').then( m => m.SamplePage55PageModule)
  },
  {
    path: 'sample-page56',
    loadChildren: () => import('./pages/sample-page56/sample-page56.module').then( m => m.SamplePage56PageModule)
  },
  {
    path: 'exercise21',
    loadChildren: () => import('./pages/exercise21/exercise21.module').then( m => m.Exercise21PageModule)
  },
  {
    path: 'sample-page57',
    loadChildren: () => import('./pages/sample-page57/sample-page57.module').then( m => m.SamplePage57PageModule)
  },
  {
    path: 'sample-page58',
    loadChildren: () => import('./pages/sample-page58/sample-page58.module').then( m => m.SamplePage58PageModule)
  },
  {
    path: 'sample-page61',
    loadChildren: () => import('./pages/sample-page61/sample-page61.module').then( m => m.SamplePage61PageModule)
  },
  {
    path: 'exercise22',
    loadChildren: () => import('./pages/exercise22/exercise22.module').then( m => m.Exercise22PageModule)
  },
  {
    path: 'sample-page65',
    loadChildren: () => import('./pages/sample-page65/sample-page65.module').then( m => m.SamplePage65PageModule)
  },
  {
    path: 'sample-page67',
    loadChildren: () => import('./pages/sample-page67/sample-page67.module').then( m => m.SamplePage67PageModule)
  },
  {
    path: 'exercise23',
    loadChildren: () => import('./pages/exercise23/exercise23.module').then( m => m.Exercise23PageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
