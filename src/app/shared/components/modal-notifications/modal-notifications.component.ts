import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { Notifications } from 'src/app/core/interfaces/notification.interface';
import { NotificationsService } from 'src/app/core/services/notifications.service';

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
    private readonly notificationsService: NotificationsService,
    private readonly navCtrl: NavController,

  ) {}

  ngOnInit() {
    this.notifications = this.notificationsService.getAllNotifications();
    
    
  }

  cancel(): Promise<boolean> {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  touchItem(event: any, notification: Notifications) {
    this.timeOut = setTimeout(()=> {
      
    }, 1000);
  }
  touchEnd(event){
    clearTimeout(this.timeOut);
  }

  deleteNotification(notidfication: Notifications){
    this.notificationsService.deleteNotification(notidfication);
    this.notifications = this.notificationsService.getAllNotifications();
  }

  readTrue(notification: Notifications){
    this.notificationsService.changeReadNotification(notification);
    this.notifications = this.notificationsService.getAllNotifications();
    this.cancel();
    this.navCtrl.navigateForward('/details/'+ notification.shopId, { state: {
      backUrl: '/tabs/account'
    }});
  }
}
