import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ToastrModule } from 'ngx-toastr'

// Components
import { ListProductsComponent } from './components/list-products/list-products.component';
import { AddEditProductComponent } from './components/add-edit-product/add-edit-product.component';
import { AppRoutingModule } from './app-routing.module';
import { ProgressBarComponent } from './shared/progress-bar/progress-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListProductsComponent,
    AddEditProductComponent,
    ProgressBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      // preventDuplicates: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
