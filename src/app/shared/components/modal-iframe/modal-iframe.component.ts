import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ModalController } from '@ionic/angular';
import { KeyRemoteConfig } from 'src/app/core/enums/remoteConfig.enum';
import { FirebaseRemoteConfigService } from 'src/app/core/services/firebase-remote-config.service';

@Component({
  selector: 'app-modal-iframe',
  templateUrl: './modal-iframe.component.html',
  styleUrls: ['./modal-iframe.component.scss'],
})
export class ModalIframeComponent  implements OnInit {

  @Input() title: string;

  content: any;

  constructor(
    public readonly modalCtrl: ModalController,
    private readonly firebaseRemoteConfigService: FirebaseRemoteConfigService,
    private readonly sanitizer: DomSanitizer
    ) {}

  async ngOnInit() {
    if(this.title === 'Términos'){
      this.content = await this.firebaseRemoteConfigService.getValueString(KeyRemoteConfig.TERMS);
    }else{
      this.content = await this.firebaseRemoteConfigService.getValueString(KeyRemoteConfig.CONDITIONS);
    }
    this.content = this.sanitizer.bypassSecurityTrustResourceUrl(this.content);
  }
}
