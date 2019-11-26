import { NgModule } from '@angular/core';

import { Routes, RouterModule, ExtraOptions } from '@angular/router';

import {
  NbAuthComponent,
  NbLoginComponent,
  NbLogoutComponent,
  NbRegisterComponent,
  NbRequestPasswordComponent,
  NbResetPasswordComponent,
} from '@nebular/auth';
import { LoginComponent } from './auth/login/login.component';
import { SezComponent } from './sez/sez.component';
import { UsersComponent } from './sez/users/users.component';
import { CitizenComponent } from './sez/citizen/citizen.component';
import { DareesComponent } from './sez/darees/darees.component';
import { DareesMenuComponent } from './sez/darees-menu/darees-menu.component';
import { DareesVoucherComponent } from './sez/darees-voucher/darees-voucher.component';
import { AsharaContriComponent } from './sez/ashara-contri/ashara-contri.component';
import { BankComponent } from './sez/bank/bank.component';
import { MembersYearlyContriComponent } from './sez/members-yearly-contri/members-yearly-contri.component';


const sezRoutes: Routes = [{
  path: '',
  component: SezComponent,
  children: [
    {
      path: 'users',
      component: UsersComponent,
    },
    {
      path: 'citizen',
      component: CitizenComponent,
    },
    {
      path: 'darees',
      component: DareesComponent
    },
    {
      path: 'darees-menu',
      component: DareesMenuComponent
    },
    {
      path: 'darees-voucher',
      component: DareesVoucherComponent
    },
    {
      path: 'ashara-contri',
      component: AsharaContriComponent
    },
    {
      path: 'bank',
      component: BankComponent
    },
    {
      path: 'yearlycontri',
      component: MembersYearlyContriComponent,
    },
    {
      path: '',
      redirectTo: 'users',
      pathMatch: 'full',
    },
    {
      path: '**',
      redirectTo: 'users',
      pathMatch: 'full',
    },
  ],
}];

const routes: Routes = [
  // {
  //   path: 'sez',
  //   loadChildren: ".\/sez\/sez.module.ts#SezModule"
  // },
  {
    path: 'sez',
    children: sezRoutes,
  },
  {
    path: 'auth',
    component: NbAuthComponent,
    children: [
      {
        path: '',
        component: LoginComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: NbRegisterComponent,
      },
      {
        path: 'logout',
        component: NbLogoutComponent,
      },
      {
        path: 'request-password',
        component: NbRequestPasswordComponent,
      },
      {
        path: 'reset-password',
        component: NbResetPasswordComponent,
      },
    ],
  },
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  { path: '**', redirectTo: 'auth/login' }
];


const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
