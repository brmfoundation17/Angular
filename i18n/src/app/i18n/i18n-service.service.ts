import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class I18nServiceService {
  localeEvent = new Subject<string>();
  constructor(private translate: TranslateService) { }
  private defaultLanguage = 'en';
  private languageList= ['en', 'hi'];

  changeLocale(locale:string){
    console.log("Current Locale : "+this.translate.currentLang);
    console.log("Request Locale : "+locale);
    this.translate.use(locale);
    this.localeEvent.next(locale);
    console.log("Changed Locale : "+this.translate.currentLang);
  }
  getdDfaultLanguage(){
    return this.defaultLanguage;
  }
  getLanguageList(){
    return this.languageList;
  }
}
