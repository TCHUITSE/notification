import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  notReadNotifications = [0, 1, 2];

  constructor() { }

  ngOnInit() {
  }

}
