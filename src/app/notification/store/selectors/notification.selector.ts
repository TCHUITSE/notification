import {createSelector} from '@ngrx/store';
import {INotificationState} from '../state/notification.state';
import {INotification} from '../../models/notification.model';

export const selectAllNotification = (state: INotificationState) => state.notifications;

export const selectCurrentNotification = (state: INotificationState) => state.notification;

export const countNotReadNotification = createSelector(
    selectAllNotification,
    (allNotifications: INotification[]) => {
        const notReadNotifications = allNotifications.filter((el) => el.unread === true );
        return notReadNotifications.length;
    }
);
