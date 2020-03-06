import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { WebsocketService } from './websocket.service';


@Injectable({
    providedIn: 'root'
})
export class NotificationService {
    httpUrlNotification = 'http://localhost:8000/notifications/';
    wsUrlNotification = 'ws://localhost:8000/notifications/';
    message: any;
    constructor(private http: HttpClient, wsService: WebsocketService) {
        this.message = wsService.connect(this.wsUrlNotification).pipe(
            map(
                (response: MessageEvent) => {
                    let data = JSON.parse(response.data);
                    console.log(data);
                }
            )
        );
    }

    getAll() {
       return this.http.get(this.httpUrlNotification);
    }

    markAsReadNotification(idNotification: number) {
        return this.http.get(`${this.httpUrlNotification}/${idNotification} `);
    }

}
