import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'pisces-feature-card',
  templateUrl: './feature-card.component.html',
  styleUrl: './feature-card.component.scss'
})
export class FeatureCardComponent implements AfterViewInit{

  @ViewChild('userStory', {static: true})
  userStory!: ElementRef;
  @ViewChild('action', {static: true})
  action!: ElementRef;
  @ViewChild('event', {static: true})
  event!: ElementRef;
  @ViewChild('command', {static: true})
  command!: ElementRef;
  @ViewChild('role', {static: true})
  role!: ElementRef;
  @ViewChild('case', {static: true})
  case!: ElementRef;

  ngAfterViewInit(): void {
//2121
  }

}
