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
import { SensorsComponent } from './sensors/sensors.component';
import {RouterModule} from '@angular/router';
import {createAppRoutes} from './app.routing';
import {PrettyJsonModule} from 'angular2-prettyjson';
import { MenuComponent } from './menu/menu.component';
import {RawDataComponent} from './rawdata/rawdata.component';

@NgModule({
  declarations: [
    AppComponent,
    RulesListComponent,
    StateComponent,
    ActionComponent,
    BackupComponent,
    SensorsComponent,
    MenuComponent,
    RawDataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgSelectModule,
    RouterModule.forRoot(createAppRoutes()),
    PrettyJsonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
