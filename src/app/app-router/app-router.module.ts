import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
const routes: Routes = [{ path: 'edit', component: EditComponent }];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRouterModule { }