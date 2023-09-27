import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", redirectTo: 'shop', pathMatch: 'full' },
  { path: "shop", loadChildren: () => import('./shopping/shopping.module').then(m => m.ShoppingModule) },
  { path: "**", redirectTo: '/shop', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
