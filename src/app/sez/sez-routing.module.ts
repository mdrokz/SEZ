import { RouterModule, Routes } from '@angular/router';
import { NgModule, Component } from '@angular/core';

import { SezComponent } from './sez.component';
import { UsersComponent } from './users/users.component';
import { NotFoundComponent } from '../pages/miscellaneous/not-found/not-found.component';
import { CitizenComponent } from './citizen/citizen.component';
import { MembersYearlyContriComponent } from './members-yearly-contri/members-yearly-contri.component';
import { DareesComponent } from './darees/darees.component';
import { DareesMenuComponent } from './darees-menu/darees-menu.component';
import { DareesVoucherComponent } from './darees-voucher/darees-voucher.component';
import { AsharaContriComponent } from './ashara-contri/ashara-contri.component';
import { BankComponent } from './bank/bank.component';
// import { SmartTableComponent } from '../pages/tables/smart-table/smart-table.component';

const routes: Routes = [{
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
            component: NotFoundComponent,
        },
    ],
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SezRoutingModule {
}
