import { Component, OnInit, AfterViewInit } from '@angular/core';
import { PreloaderService, SettingsService } from '@core';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit, AfterViewInit {
  constructor(private preloader: PreloaderService, private settings: SettingsService) {}

  ngOnInit() {
    // // @ts-ignore
    // if (module.hot) {
    //   // @ts-ignore
    //   module.hot.accept('./README.md', () => {
    //   console.log('热替换');
    // });
    // }
    this.settings.setDirection();
    this.settings.setTheme();
  }

  ngAfterViewInit() {
    this.preloader.hide();
  }
}
