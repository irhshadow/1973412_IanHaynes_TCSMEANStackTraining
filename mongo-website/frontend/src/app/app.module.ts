import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DeleteClassComponent } from './delete-class/delete-class.component';
import { ShowClassComponent } from './show-class/show-class.component';
import { StoreClassComponent } from './store-class/store-class.component';
import { UpdateClassComponent } from './update-class/update-class.component';

@NgModule({
  declarations: [
    AppComponent,
    DeleteClassComponent,
    ShowClassComponent,
    StoreClassComponent,
    UpdateClassComponent,
    DeleteClassComponent,
    ShowClassComponent,
    StoreClassComponent,
    UpdateClassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
