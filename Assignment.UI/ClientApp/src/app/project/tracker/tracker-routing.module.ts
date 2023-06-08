import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrackerComponent } from './tracker.component';
import { WeeklyTrackerComponent } from './weekly-tracker.component';
import { MonthlyTrackerComponent } from './monthly-tracker.component';
import { LayoutTrackerComponent } from './layout-tracker.component';
import { AboutTrackerComponent } from './about-tracker.component';

const routes: Routes = [
    {
        path: '', component: LayoutTrackerComponent,
        children: [
            {path:'about', component:AboutTrackerComponent},
            { path: 'monthly', component: MonthlyTrackerComponent },
            { path: 'weekly', component: WeeklyTrackerComponent }
            // { path: 'edit/:id', component: AddEditComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TrackerRoutingModule { }