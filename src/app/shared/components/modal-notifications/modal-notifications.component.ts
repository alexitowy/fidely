import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Notifications } from 'src/app/core/interfaces/notification.interface';
import { NotificationsService } from 'src/app/core/services/notifications.service';
import { UtilsService } from 'src/app/core/services/utils.service';


@Component({
  selector: 'app-modal-notifications',
  templateUrl: './modal-notifications.component.html',
  styleUrls: ['./modal-notifications.component.scss'],
})

export class ModalNotificationsComponent  implements OnInit {

  

  notifications: any [];
  timeOut: any;

  constructor(
    private readonly modalCtrl: ModalController,
    private readonly utilsService: UtilsService,
    private readonly notificationsService: NotificationsService

  ) {}

  ngOnInit() {
    this.notifications = this.notificationsService.getAllNotifications();
    
  }

  cancel(): Promise<boolean> {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  deleteNotification(notification: Notifications) {
    /* this.notifications = this.notifications.filter(n => n.id !== notification.id);
    this.utilsService.presentToastSuccess('Se ha eliminado correctamente');
    this.noNotifications = this.notifications.length === 0; */
  }

  touchItem(event: any, notification: Notifications) {
    this.timeOut = setTimeout(()=> {
      
    }, 1000);
  }
  touchEnd(event){
    clearTimeout(this.timeOut);
  }
}
