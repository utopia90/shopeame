import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ShopeamePageComponent } from './pages/shopeame-page/shopeame-page.component';
import { ShopeameWelcomeComponent } from './pages/shopeame-welcome/shopeame-welcome.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { GestionComponent } from './pages/gestion/gestion.component';
import { ServiceService } from './service.service';
import { ProductsLocalServiceService } from './products-local-service.service';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ShopeamePageComponent,
    ShopeameWelcomeComponent,
    ProductsPageComponent,
    GestionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ServiceService, ProductsLocalServiceService], 
  bootstrap: [AppComponent]
})
export class AppModule { }
