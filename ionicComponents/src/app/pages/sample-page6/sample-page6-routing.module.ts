import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SamplePage6Page } from './sample-page6.page';

const routes: Routes = [
  {
    path: '',
    component: SamplePage6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SamplePage6PageRoutingModule {}
