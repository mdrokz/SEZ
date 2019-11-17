import { NgModule } from '@angular/core';
import { NbMenuModule, NbCardModule } from '@nebular/theme';
import { ThemeModule } from '../@theme/theme.module';
import { SezComponent } from './sez.component';
import { UsersComponent } from './users/users.component';
import { SezRoutingModule } from './sez-routing.module';
import { MiscellaneousModule } from '../pages/miscellaneous/miscellaneous.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { CitizenComponent } from './citizen/citizen.component';
import { MembersYearlyContriComponent } from './members-yearly-contri/members-yearly-contri.component';
// import { SmartTableComponent } from '../pages/tables/smart-table/smart-table.component';

@NgModule({
    imports: [
        SezRoutingModule,
        ThemeModule,
        NbMenuModule,
        MiscellaneousModule,
        Ng2SmartTableModule,
        NbCardModule,
    ],
    declarations: [
        SezComponent,
        UsersComponent,
        CitizenComponent,
        MembersYearlyContriComponent
    ],
})
export class SezModule {
}
