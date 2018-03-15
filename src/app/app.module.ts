import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { RulesListComponent } from './rules/rules-list.component';
import { HashmapPipe } from './pipes/hashmap.pipe';


@NgModule({
  declarations: [
    AppComponent,
    RulesListComponent,
    HashmapPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
