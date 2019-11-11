import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { SezComponent } from './sez.component';
import { UsersComponent } from './users/users.component';
import { SezRoutingModule } from './sez-routing.module';
import { MiscellaneousModule } from '../pages/miscellaneous/miscellaneous.module';

@NgModule({
    imports: [
        SezRoutingModule,
        ThemeModule,
        NbMenuModule,
        MiscellaneousModule
    ],
    declarations: [
        SezComponent,
        UsersComponent
    ],
})
export class SezModule {
}
