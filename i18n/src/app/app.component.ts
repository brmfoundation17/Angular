import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {  I18nServiceService } from './i18n/i18n-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title = 'i18n';

  constructor(
    private translate: TranslateService,
    private i18nServices : I18nServiceService
    ){
    translate.setDefaultLang('en');
    translate.use('en');
  }
  changeLocale(locale:string){
    this.i18nServices.changeLocale(locale);
  }
}
