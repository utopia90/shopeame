import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import {GestionComponent }   from './pages/gestion/gestion.component';
import {ShopeameWelcomeComponent }   from './pages/shopeame-welcome/shopeame-welcome.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: ShopeameWelcomeComponent },
  { path: 'products', component: ProductsPageComponent },
  { path: 'gestion', component: GestionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
