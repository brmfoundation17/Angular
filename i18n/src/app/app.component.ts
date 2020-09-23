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
    public translate: TranslateService,
    private i18nServices : I18nServiceService
    ){
      translate.addLangs(i18nServices.getLanguageList());
      translate.setDefaultLang(i18nServices.getdDfaultLanguage());
      translate.use(i18nServices.getdDfaultLanguage());    
  }
  changeLocale(locale:string){
    this.i18nServices.changeLocale(locale);
  }
}
