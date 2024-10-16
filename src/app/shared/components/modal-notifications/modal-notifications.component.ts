import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-notifications',
  templateUrl: './modal-notifications.component.html',
  styleUrls: ['./modal-notifications.component.scss'],
})
export class ModalNotificationsComponent  implements OnInit {

  notifications = [
    {
      id: 1,
      icon: 'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Ffacebook-brands-solid.svg?alt=media&token=cd543acd-7bf1-44a9-ae06-844773e961f3',
      tienda: "Belleza Natural",
      mensaje: "¡Obtén un 20% de descuento en todos los productos orgánicos para el cuidado de la piel! Válido hasta fin de mes.",
      fechaExpiracion: "2024-10-31",
      categoria: "Cuidado de la Piel",
    },
    {
      id: 2,
      icon: 'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Ffacebook-brands-solid.svg?alt=media&token=cd543acd-7bf1-44a9-ae06-844773e961f3',
      tienda: "Glamour & Estilo",
      mensaje: "¡Promoción especial de manicura y pedicura! Llévate un 2x1 este fin de semana.",
      fechaExpiracion: "2024-10-20",
      categoria: "Manicura y Pedicura",
    },
    {
      id: 3,
      icon: 'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Ffacebook-brands-solid.svg?alt=media&token=cd543acd-7bf1-44a9-ae06-844773e961f3',
      tienda: "Brillo de Sol",
      mensaje: "¡50% de descuento en todos los productos para protección solar! Prepárate para el verano.",
      fechaExpiracion: "2024-11-10",
      categoria: "Protección Solar",
    },
    {
      id: 4,
      icon: 'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Ffacebook-brands-solid.svg?alt=media&token=cd543acd-7bf1-44a9-ae06-844773e961f3',
      tienda: "Zaccha",
      mensaje: "Luce espectacular con un 30% de descuento en tratamientos capilares de queratina.",
      fechaExpiracion: "2024-10-25",
      categoria: "Tratamientos Capilares",
    },
    {
      id: 5,
      icon: 'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Ffacebook-brands-solid.svg?alt=media&token=cd543acd-7bf1-44a9-ae06-844773e961f3',
      tienda: "Relax & Spa",
      mensaje: "Relájate con un masaje de 1 hora a mitad de precio. ¡Reserva tu cita ahora!",
      fechaExpiracion: "2024-11-05",
      categoria: "Masajes",
    },
    {
      id: 6,
      icon: 'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Ffacebook-brands-solid.svg?alt=media&token=cd543acd-7bf1-44a9-ae06-844773e961f3',
      tienda: "Terapia Esencial",
      mensaje: "¡15% de descuento en aceites esenciales y productos de aromaterapia!",
      fechaExpiracion: "2024-11-01",
      categoria: "Aromaterapia",
    },
    {
      id: 7,
      icon: 'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Ffacebook-brands-solid.svg?alt=media&token=cd543acd-7bf1-44a9-ae06-844773e961f3',
      tienda: "Maquillaje Pro",
      mensaje: "Asiste a nuestro taller de maquillaje gratuito al comprar productos de la marca Glamour Makeup.",
      fechaExpiracion: "2024-10-22",
      categoria: "Maquillaje",
    },
    {
      id: 8,
      icon: 'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Ffacebook-brands-solid.svg?alt=media&token=cd543acd-7bf1-44a9-ae06-844773e961f3',
      tienda: "Estilo Urbano",
      mensaje: "¡30% de descuento en todos los cortes de cabello este mes! Luce el estilo que siempre quisiste.",
      fechaExpiracion: "2024-10-30",
      categoria: "Peluquería",
    },
    {
      id: 9,
      icon: 'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Ffacebook-brands-solid.svg?alt=media&token=cd543acd-7bf1-44a9-ae06-844773e961f3',
      tienda: "Fresh Skin",
      mensaje: "Compra un suero facial y llévate una mascarilla hidratante gratis. ¡Piel radiante garantizada!",
      fechaExpiracion: "2024-10-28",
      categoria: "Cuidado de la Piel",
    },
    {
      id: 10,
      icon: 'https://firebasestorage.googleapis.com/v0/b/fidelity-back.appspot.com/o/Icons%2Ffacebook-brands-solid.svg?alt=media&token=cd543acd-7bf1-44a9-ae06-844773e961f3',
      tienda: "Glow & Shine",
      mensaje: "¡Descuento del 25% en todos los tratamientos faciales para una piel luminosa!",
      fechaExpiracion: "2024-11-15",
      categoria: "Tratamientos Faciales",
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
