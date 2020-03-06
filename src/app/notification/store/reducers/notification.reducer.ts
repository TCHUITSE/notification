import {Action, createReducer, on} from '@ngrx/store';
import * as NotificationActions from '../actions/notification.actions';
import {initialNotificationState, INotificationState} from '../state/notification.state';


const notificationReducer = createReducer(initialNotificationState,
    on(NotificationActions.loadUserNotifications,
        (state, {notifications}) => ({...state, notifications})),
    on(NotificationActions.addUserNotification,
        (state, {notification}) => ({...state, notifications: [notification, ...state.notifications] })),
    on(NotificationActions.markNotificationAsRead,
        (state, {notification}) => ({
            ...state,
            notifications: state.notifications.map((el) => {
                if (el.id === notification.id) {
                    return notification;
                } else {
                    return el;
                }
            }),
            notification: state.notification.id === notification.id ? notification : state.notification
        }))
);


export function reducer(state: INotificationState| undefined, action: Action) {
    return notificationReducer(state, action);
}

export const notifFeatureKey = 'notificationStore';
