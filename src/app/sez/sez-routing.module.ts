import { RouterModule, Routes } from '@angular/router';
import { NgModule, Component } from '@angular/core';

import { SezComponent } from './sez.component';
import { UsersComponent } from './users/users.component';
import { NotFoundComponent } from '../pages/miscellaneous/not-found/not-found.component';
import { CitizenComponent } from './citizen/citizen.component';
import { MembersYearlyContriComponent } from './members-yearly-contri/members-yearly-contri.component';
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
