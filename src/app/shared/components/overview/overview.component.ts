import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CardShop } from 'src/app/core/interfaces/dataCard.interface';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit{
  @Input() shop: CardShop;

  secureUrl: SafeResourceUrl;
  
  constructor(
    public readonly sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.secureUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.shop.adressUrl); 
  }
}
