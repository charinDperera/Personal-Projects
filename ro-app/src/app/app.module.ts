import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { ContentComponent } from './content/content.component';
import { CardComponent } from './content/products/card/card.component';
import { ProductsComponent } from './content/products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    TopMenuComponent,
    ContentComponent,
    CardComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
