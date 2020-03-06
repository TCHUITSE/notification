import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {NotificationService} from '../../services/notification.service';
import {map, mergeMap, switchMap} from 'rxjs/operators';

@Injectable()
export class NotificationEffects {

    getNotifications$ = createEffect(() =>
        this.actions$.pipe(
            ofType('[User] Get user notifications'),
            mergeMap(() =>
                this.notifService.getAll().pipe(
                    map(notifications => ({ type: '[User] Load user notifications', payload: notifications}))
                )
            )
        )
    );

    readNotification$ = createEffect(() =>
        this.actions$.pipe(
            ofType('[User] Read notification'),
            mergeMap((action: any) =>
                this.notifService.markAsReadNotification(action.idNotification).pipe(
                    map(notification => ({ type: '[User] Mark notification as read', payload: notification }))
                )
            )
        )
    );

    constructor(
        private actions$: Actions,
        private notifService: NotificationService
    ) {}
}
