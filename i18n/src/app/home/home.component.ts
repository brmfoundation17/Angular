import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { I18nServiceService } from '../i18n/i18n-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private translate : TranslateService,
    private i18nServices : I18nServiceService
    ) { 
    //translate.setDefaultLang('hi');
    this.i18nServices.localeEvent.subscribe(locale =>{ 
      translate.setDefaultLang(locale);
      this.translate.use(locale)
    });
  }
  
  ngOnInit(): void {
    this.i18nServices.localeEvent.subscribe(locale => {
      this.translate.use(locale);
      this.translate.use(locale)
    });
    console.log("Home Loaded : "+this.translate.currentLang);
  } 
}
