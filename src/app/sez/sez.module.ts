import { NgModule } from '@angular/core';
import { NbMenuModule, NbCardModule } from '@nebular/theme';
import { ThemeModule } from '../@theme/theme.module';
import { SezComponent } from './sez.component';
import { UsersComponent } from './users/users.component';
import { SezRoutingModule } from './sez-routing.module';
import { MiscellaneousModule } from '../pages/miscellaneous/miscellaneous.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
    imports: [
        SezRoutingModule,
        ThemeModule,
        NbMenuModule,
        MiscellaneousModule,
        Ng2SmartTableModule,
        NbCardModule
    ],
    declarations: [
        SezComponent,
        UsersComponent
    ],
})
export class SezModule {
}
