import {INotification} from '../../models/notification.model';

export interface INotificationState {
    notifications: INotification[];
    notification: INotification;
}

export const initialNotificationState: INotificationState = {
    notifications: null,
    notification: null
};
