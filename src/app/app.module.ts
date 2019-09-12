import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';
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
import { JsonviewerComponent } from './jsonviewer/jsonviewer.component';
import {
  MatButtonModule,
  MatCardModule,
  MatExpansionModule, MatFormFieldModule, MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatRippleModule,
  MatSidenavModule, MatSlideToggleModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SafeDatePipe} from './safe-date/safe-date.pipe';
import { RulesListSearchPipe } from './rules/rules-list-search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RulesListComponent,
    StateComponent,
    ActionComponent,
    BackupComponent,
    SensorsComponent,
    MenuComponent,
    RawDataComponent,
    JsonviewerComponent,
    SafeDatePipe,
    RulesListSearchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgSelectModule,
    RouterModule.forRoot(createAppRoutes()),
    PrettyJsonModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatCardModule,
    MatRippleModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatGridListModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'en_NL' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
