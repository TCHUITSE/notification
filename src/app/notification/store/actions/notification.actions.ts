import {createAction, props} from '@ngrx/store';
import {INotification} from '../../models/notification.model';


export const loadUserNotifications = createAction(
    '[User] Load user notifications',
    props<{notifications: INotification[]}>()
);
export const getUserNotifications = createAction(
    '[User] Get user notifications'
);

export const addUserNotification = createAction(
    '[User] Add new user notification',
    props<{notification: INotification}>()
);
export const markNotificationAsRead = createAction(
    '[User] Mark notification as read',
    props<{notification: INotification}>()
);
export const readNotification = createAction(
    '[User] Read notification',
    props<{ idNotification: number }>()
);

