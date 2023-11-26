import { Component, OnInit, AfterViewInit, afterNextRender } from '@angular/core';
import { SettingsService } from './bootstrap/settings.service';
import { PreloaderService } from './bootstrap/preloader.service';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit, AfterViewInit {
  constructor(private preloader: PreloaderService, private settings: SettingsService) {}

  ngOnInit() {
    this.settings.setDirection();
    this.settings.setTheme();
  }

  ngAfterViewInit() {
    this.preloader.hide();
  }
}
