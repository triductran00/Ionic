import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SamplePage8Page } from './sample-page8.page';

const routes: Routes = [
  {
    path: '',
    component: SamplePage8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SamplePage8PageRoutingModule {}
