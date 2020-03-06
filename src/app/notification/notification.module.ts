import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule} from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import {NotificationEffects} from './store/effect/notification.effects';
import * as fromNotification from './store/reducers/notification.reducer';
import { NotificationComponent } from './components/notification/notification.component';



@NgModule({
  declarations: [NotificationComponent],
  imports: [
    //angular
    CommonModule,
    HttpClientModule,

    //ngrx
    StoreModule.forFeature(fromNotification.notifFeatureKey, fromNotification.reducer),
    EffectsModule.forFeature([NotificationEffects])


  ]
})
export class NotificationModule { }
