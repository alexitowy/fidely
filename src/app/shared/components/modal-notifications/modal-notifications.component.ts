import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Notifications } from 'src/app/core/interfaces/dataCard.interface';

@Component({
  selector: 'app-modal-notifications',
  templateUrl: './modal-notifications.component.html',
  styleUrls: ['./modal-notifications.component.scss'],
})

export class ModalNotificationsComponent  implements OnInit {

  notifications: Notifications [] = [
    {
      id: '1',
      icon: 'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Ffacebook-brands-solid.svg?alt=media&token=cd543acd-7bf1-44a9-ae06-844773e961f3',
      shopName: "Belleza Natural",
      desc: "¡Obtén un 20% de descuento en todos los productos orgánicos para el cuidado de la piel! Válido hasta fin de mes.",
      date: "2024-10-31",
    },
    {
      id: '2',
      icon: 'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Ffacebook-brands-solid.svg?alt=media&token=cd543acd-7bf1-44a9-ae06-844773e961f3',
      shopName: "Glamour & Estilo",
      desc: "¡Promoción especial de manicura y pedicura! Llévate un 2x1 este fin de semana.",
      date: "2024-10-20",
    },
    {
      id: '3',
      icon: 'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Ffacebook-brands-solid.svg?alt=media&token=cd543acd-7bf1-44a9-ae06-844773e961f3',
      shopName: "Brillo de Sol",
      desc: "¡50% de descuento en todos los productos para protección solar! Prepárate para el verano.",
      date: "2024-11-10",
    },
    {
      id: '4',
      icon: 'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Ffacebook-brands-solid.svg?alt=media&token=cd543acd-7bf1-44a9-ae06-844773e961f3',
      shopName: "Zaccha",
      desc: "Luce espectacular con un 30% de descuento en tratamientos capilares de queratina.",
      date: "2024-10-25",
    },
    {
      id: '5',
      icon: 'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Ffacebook-brands-solid.svg?alt=media&token=cd543acd-7bf1-44a9-ae06-844773e961f3',
      shopName: "Relax & Spa",
      desc: "Relájate con un masaje de 1 hora a mitad de precio. ¡Reserva tu cita ahora!",
      date: "2024-11-05",
    },
    {
      id: '6',
      icon: 'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Ffacebook-brands-solid.svg?alt=media&token=cd543acd-7bf1-44a9-ae06-844773e961f3',
      shopName: "Terapia Esencial",
      desc: "¡15% de descuento en aceites esenciales y productos de aromaterapia!",
      date: "2024-11-01",
    },
    {
      id: '7',
      icon: 'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Ffacebook-brands-solid.svg?alt=media&token=cd543acd-7bf1-44a9-ae06-844773e961f3',
      shopName: "Maquillaje Pro",
      desc: "Asiste a nuestro taller de maquillaje gratuito al comprar productos de la marca Glamour Makeup.",
      date: "2024-10-22",
    },
    {
      id: '8',
      icon: 'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Ffacebook-brands-solid.svg?alt=media&token=cd543acd-7bf1-44a9-ae06-844773e961f3',
      shopName: "Estilo Urbano",
      desc: "¡30% de descuento en todos los cortes de cabello este mes! Luce el estilo que siempre quisiste.",
      date: "2024-10-30",
    },
    {
      id: '9',
      icon: 'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Ffacebook-brands-solid.svg?alt=media&token=cd543acd-7bf1-44a9-ae06-844773e961f3',
      shopName: "Fresh Skin",
      desc: "Compra un suero facial y llévate una mascarilla hidratante gratis. ¡Piel radiante garantizada!",
      date: "2024-10-28",
    },
    {
      id: '10',
      icon: 'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Ffacebook-brands-solid.svg?alt=media&token=cd543acd-7bf1-44a9-ae06-844773e961f3',
      shopName: "Glow & Shine",
      desc: "¡Descuento del 25% en todos los tratamientos faciales para una piel luminosa!",
      date: "2024-11-15",
    }
  ];


  constructor(
    private readonly modalCtrl: ModalController
  ) { }

  ngOnInit() {}

  cancel(): Promise<boolean> {
    return this.modalCtrl.dismiss(null, 'cancel');
  }
}
