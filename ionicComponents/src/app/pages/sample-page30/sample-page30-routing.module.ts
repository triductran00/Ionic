import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SamplePage30Page } from './sample-page30.page';

const routes: Routes = [
  {
    path: '',
    component: SamplePage30Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SamplePage30PageRoutingModule {}
