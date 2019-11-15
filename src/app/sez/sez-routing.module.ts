import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { SezComponent } from './sez.component';
import { UsersComponent } from './users/users.component';
import { NotFoundComponent } from '../pages/miscellaneous/not-found/not-found.component';
import { SmartTableComponent } from '../pages/tables/smart-table/smart-table.component';

const routes: Routes = [{
    path: '',
    component: SezComponent,
    children: [
        {
            path: 'users',
            component: SmartTableComponent,
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
