import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RootComponent } from './root/root.component';

const routes: Routes = [
  {
    path: "", component: RootComponent,
    loadChildren: () => import('../home/home.module').then(m => m.HomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
