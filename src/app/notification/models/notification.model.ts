export interface INotification {
    id: number;
    verb: string;
    timestamp: Date;
    level: string;
    unread: boolean;
    actor_object_id: number;
    actor_content_type: string;
    recipient: number;
    action_object_id: number | null;
    action_object_content_type: string | null;
    target_object_id: number | null;
    target_object_content_type: number | null;
}
