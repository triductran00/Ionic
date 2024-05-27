import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SamplePage67Page } from './sample-page67.page';

const routes: Routes = [
  {
    path: '',
    component: SamplePage67Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SamplePage67PageRoutingModule {}
