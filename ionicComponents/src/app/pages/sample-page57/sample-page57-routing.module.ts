import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SamplePage57Page } from './sample-page57.page';

const routes: Routes = [
  {
    path: '',
    component: SamplePage57Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SamplePage57PageRoutingModule {}
