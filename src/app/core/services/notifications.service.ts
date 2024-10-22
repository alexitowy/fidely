import { Injectable } from '@angular/core';
import { Notifications } from '../interfaces/notification.interface';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root',
})
export class NotificationsService {
  notifications: Notifications[] = [
    {
      id: '1',
      shopId: '1',
      icon: 'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Ffacebook-brands-solid.svg?alt=media&token=cd543acd-7bf1-44a9-ae06-844773e961f3',
      shopName: 'Belleza Natural',
      desc: '¡Obtén un 20% de descuento en todos los productos orgánicos para el cuidado de la piel! Válido hasta fin de mes.',
      date: '2024-10-21T16:30:00',
      isNew: true,
      isRead: false,
    },
    {
      id: '2',
      shopId: '2',
      icon: 'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Ffacebook-brands-solid.svg?alt=media&token=cd543acd-7bf1-44a9-ae06-844773e961f3',
      shopName: 'Glamour & Estilo',
      desc: '¡Promoción especial de manicura y pedicura! Llévate un 2x1 este fin de semana.',
      date: '2024-10-21T16:30:00',
      isNew: false,
      isRead: false,
    },
    {
      id: '3',
      shopId: '3',
      icon: 'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Ffacebook-brands-solid.svg?alt=media&token=cd543acd-7bf1-44a9-ae06-844773e961f3',
      shopName: 'Brillo de Sol',
      desc: '¡50% de descuento en todos los productos para protección solar! Prepárate para el verano.',
      date: '2024-10-22T16:30:00',
      isNew: true,
      isRead: false,
    },
    {
      id: '4',
      shopId: '4',
      icon: 'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Ffacebook-brands-solid.svg?alt=media&token=cd543acd-7bf1-44a9-ae06-844773e961f3',
      shopName: 'Zaccha',
      desc: 'Luce espectacular con un 30% de descuento en tratamientos capilares de queratina.',
      date: '2024-10-20T16:00:00',
      isNew: false,
      isRead: false,
    },
    {
      id: '5',
      shopId: '5',
      icon: 'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Ffacebook-brands-solid.svg?alt=media&token=cd543acd-7bf1-44a9-ae06-844773e961f3',
      shopName: 'Relax & Spa',
      desc: 'Relájate con un masaje de 1 hora a mitad de precio. ¡Reserva tu cita ahora!',
      date: '2024-10-23T16:30:00',
      isNew: true,
      isRead: false,
    },
    {
      id: '6',
      shopId: '6',
      icon: 'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Ffacebook-brands-solid.svg?alt=media&token=cd543acd-7bf1-44a9-ae06-844773e961f3',
      shopName: 'Terapia Esencial',
      desc: '¡15% de descuento en aceites esenciales y productos de aromaterapia!',
      date: '2024-10-21T16:30:00',
      isNew: false,
      isRead: false,
    },
    {
      id: '7',
      shopId: '7',
      icon: 'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Ffacebook-brands-solid.svg?alt=media&token=cd543acd-7bf1-44a9-ae06-844773e961f3',
      shopName: 'Maquillaje Pro',
      desc: 'Asiste a nuestro taller de maquillaje gratuito al comprar productos de la marca Glamour Makeup.',
      date: '2024-10-21T16:30:00',
      isNew: false,
      isRead: false,
    },
    {
      id: '8',
      shopId: '8',
      icon: 'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Ffacebook-brands-solid.svg?alt=media&token=cd543acd-7bf1-44a9-ae06-844773e961f3',
      shopName: 'Estilo Urbano',
      desc: '¡30% de descuento en todos los cortes de cabello este mes! Luce el estilo que siempre quisiste.',
      date: '2024-10-21T16:30:00',
      isNew: false,
      isRead: false,
    },
    {
      id: '9',
      shopId: '9',
      icon: 'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Ffacebook-brands-solid.svg?alt=media&token=cd543acd-7bf1-44a9-ae06-844773e961f3',
      shopName: 'Fresh Skin',
      desc: 'Compra un suero facial y llévate una mascarilla hidratante gratis. ¡Piel radiante garantizada!',
      date: '2024-10-21T16:30:00',
      isNew: false,
      isRead: true,
    },
    {
      id: '10',
      shopId: '10',
      icon: 'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Ffacebook-brands-solid.svg?alt=media&token=cd543acd-7bf1-44a9-ae06-844773e961f3',
      shopName: 'Glow & Shine',
      desc: '¡Descuento del 25% en todos los tratamientos faciales para una piel luminosa!',
      date: '2024-10-21T16:30:00',
      isNew: false,
      isRead: true,
    },
  ];

  constructor(private readonly utilsService: UtilsService) {}

  getNewNotifications() {
    const newNotification = this.notifications.filter(
      (notification) => notification.isNew === true
    );
    return newNotification.length;
  }

  readNotifications() {
    this.notifications.forEach((notification) => (notification.isNew = false));
  }

  getAllNotifications() {
    return this.notifications;
  }

  deleteNotification(notification: Notifications) {
    this.notifications = this.notifications.filter(
      (n) => n.id !== notification.id
    );
    this.utilsService.presentToastSuccess('Se ha eliminado correctamente');
  }

  changeReadNotification(notification: Notifications) {
    this.notifications.forEach((notify) => {
      if (notify.id === notification.id) {
        notify.isRead = true;
      }
    });
  }
}
