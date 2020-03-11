import { Component, OnInit, ViewChild } from '@angular/core';
import { MdePopoverTrigger } from '@material-extended/mde';



@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  @ViewChild(MdePopoverTrigger, { static: false }) trigger: MdePopoverTrigger;
  notReadNotifications = [0, 1, 2];
  

  ngOnInit() {
  }

  closePopover() {
    this.trigger.togglePopover();
  }

  

}
