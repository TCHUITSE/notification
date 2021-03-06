import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule} from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import {NotificationEffects} from './store/effect/notification.effects';
import * as fromNotification from './store/reducers/notification.reducer';
import { NotificationComponent } from './components/notification/notification.component';
import {  MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { OnenotificationComponent } from './components/onenotification/onenotification.component';
import { MatCardModule } from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { MdePopoverModule } from '@material-extended/mde';



@NgModule({
  declarations: [NotificationComponent, OnenotificationComponent],
  imports: [
    //angular
    CommonModule,
    HttpClientModule,

    //ngrx
    StoreModule.forFeature(fromNotification.notifFeatureKey, fromNotification.reducer),
    EffectsModule.forFeature([NotificationEffects]),

    //angular
    MatIconModule,
    MatBadgeModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MdePopoverModule



  ]
})
export class NotificationModule { }
