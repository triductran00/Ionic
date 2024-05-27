import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SamplePage16Page } from './sample-page16.page';

const routes: Routes = [
  {
    path: '',
    component: SamplePage16Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SamplePage16PageRoutingModule {}
