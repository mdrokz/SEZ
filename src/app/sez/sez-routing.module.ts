import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { SezComponent } from './sez.component';
import { UsersComponent } from './users/users.component';
import { NotFoundComponent } from '../pages/miscellaneous/not-found/not-found.component';

const routes: Routes = [{
    path: '',
    component: SezComponent,
    children: [
        {
            path: 'users',
            component: UsersComponent,
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
