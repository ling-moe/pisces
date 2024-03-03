import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'pisces-designer',
  templateUrl: './designer.component.html',
  styleUrl: './designer.component.scss'
})
export class DesignerComponent implements OnInit {

  @ViewChild('container', {static: true})
  container!: ElementRef;
  constructor(
    private route: ActivatedRoute,
  ) {
  }
  productId!: bigint;

  ngOnInit(): void {
    this.productId =this.route.snapshot.params['id'];
    console.log(this.productId)
  }

}
