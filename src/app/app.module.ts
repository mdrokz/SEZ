import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";

import { ElectronService } from "./services/electron.service";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SecondWindowComponent } from "./components/second-window/second-window.component";
import { NbThemeModule, NbLayoutModule, NbAlertModule, NbInputModule, NbCheckboxModule, NbIconModule, NbButtonModule, NbMenuModule, NbSidebarModule, NbDatepickerModule, NbDialogModule, NbWindowModule, NbToastrModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { SezModule } from './sez/sez.module';
import { ThemeModule } from './@theme/theme.module';
import { LoginComponent } from './auth/login/login.component';
import { FormsModule } from '@angular/forms';
import { CoreModule } from './@core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SecondWindowComponent,
    LoginComponent
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

    SezModule
  ],
  providers: [ElectronService],
  bootstrap: [AppComponent]
})
export class AppModule { }
