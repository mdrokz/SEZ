import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SecondWindowComponent } from "./components/second-window/second-window.component";
import {
  NbThemeModule,
  NbLayoutModule,
  NbAlertModule,
  NbInputModule,
  NbCheckboxModule,
  NbIconModule,
  NbButtonModule,
  NbMenuModule,
  NbSidebarModule,
  NbDatepickerModule,
  NbDialogModule,
  NbWindowModule,
  NbToastrModule,
  NbCardModule
} from '@nebular/theme';

import { NbEvaIconsModule } from '@nebular/eva-icons';
import { ThemeModule } from './@theme/theme.module';
import { LoginComponent } from './auth/login/login.component';
import { FormsModule } from '@angular/forms';
import { CoreModule } from './@core/core.module';
import { SezComponent } from './sez/sez.component';
import { UsersComponent } from './sez/users/users.component';
import { CitizenComponent } from './sez/citizen/citizen.component';
import { MembersYearlyContriComponent } from './sez/members-yearly-contri/members-yearly-contri.component';
import { DareesComponent } from './sez/darees/darees.component';
import { DareesMenuComponent } from './sez/darees-menu/darees-menu.component';
import { DareesVoucherComponent } from './sez/darees-voucher/darees-voucher.component';
import { AsharaContriComponent } from './sez/ashara-contri/ashara-contri.component';
import { BankComponent } from './sez/bank/bank.component';
import { ReportsComponent } from './sez/reports/reports.component';
import { SezDatepickerComponent } from './sez/sez-datepicker/sez-datepicker.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ElectronAppService } from './services/electron.service';
import { ElectronService } from 'ngx-electron';
import { SezSmartTableComponent } from './shared/components/smart-table/smart-table/smart-table.component';


const sezComponents = [
  SezComponent,
  UsersComponent,
  CitizenComponent,
  MembersYearlyContriComponent,
  DareesComponent,
  DareesMenuComponent,
  DareesVoucherComponent,
  AsharaContriComponent,
  BankComponent,
  ReportsComponent,
  SezDatepickerComponent,
  SezSmartTableComponent
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SecondWindowComponent,
    LoginComponent,
    ...sezComponents
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ThemeModule.forRoot(),
    // NbThemeModule.forRoot({ name: 'corporate' }),
    NbLayoutModule,
    NbEvaIconsModule,
    // Externally Added
    NbAlertModule,
    NbInputModule,
    NbCheckboxModule,
    NbIconModule,
    NbButtonModule,

    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    CoreModule.forRoot(),

    Ng2SmartTableModule,
    NbCardModule
  ],
  providers: [
    ElectronAppService,
    ElectronService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
