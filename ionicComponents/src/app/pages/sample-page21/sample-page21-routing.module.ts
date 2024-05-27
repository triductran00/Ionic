import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SamplePage21Page } from './sample-page21.page';

const routes: Routes = [
  {
    path: '',
    component: SamplePage21Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SamplePage21PageRoutingModule {}
