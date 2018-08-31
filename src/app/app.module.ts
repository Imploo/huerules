import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RulesListComponent } from './rules/rules-list.component';
import { HttpClientModule } from '@angular/common/http';
import { StateComponent } from './rules/state/state.component';
import {NgSelectModule} from '@ng-select/ng-select';
import { ActionComponent } from './rules/action/action.component';
import { BackupComponent } from './backup/backup.component';

@NgModule({
  declarations: [
    AppComponent,
    RulesListComponent,
    StateComponent,
    ActionComponent,
    BackupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
