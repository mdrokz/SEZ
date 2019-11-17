import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DevComponent } from './dev/dev.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';

import { NgxElectronModule } from 'ngx-electron';
import { DashboardComponent } from './dashboard/dashboard.component';

import { CoreModule } from './@core/core.module';
import { ThemeModule } from './@theme/theme.module';
import {
  NbChatModule,
  NbDatepickerModule,
  NbDialogModule,
  NbMenuModule,
  NbSidebarModule,
  NbToastrModule,
  NbWindowModule,
  NbAlertModule,
  NbInputModule,
  NbCheckboxModule,
  NbIconModule,
  NbButtonModule
} from '@nebular/theme';
import { CitizenComponent } from './sez/citizen/citizen.component';
import { MembersYearlyContriComponent } from './sez/members-yearly-contri/members-yearly-contri.component';

@NgModule({
  declarations: [
    AppComponent,
    DevComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgxElectronModule,
    NbAlertModule,
    NbInputModule,
    NbCheckboxModule,
    NbIconModule,
    NbButtonModule,

    ThemeModule.forRoot(),

    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    NbChatModule.forRoot({
      messageGoogleMapKey: 'AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY',
    }),
    CoreModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
