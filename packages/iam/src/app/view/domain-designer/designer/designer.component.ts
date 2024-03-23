import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  NgZone,
  ViewChild
} from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { EditorProviderService } from "./editor-provider.service";

@Component({
  selector: 'pisces-designer',
  templateUrl: './designer.component.html',
  styleUrl: './designer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DesignerComponent implements AfterViewInit {

  @ViewChild('container', {static: true})
  container!: ElementRef;
  constructor(
    private route: ActivatedRoute,
    private ngzone: NgZone,
    private editorProvider: EditorProviderService,
  ) {
  }
  productId!: bigint;

  ngAfterViewInit() {
    const editor = this.editorProvider.getEditor();
    if (this.container.nativeElement && editor) {
      this.container.nativeElement.appendChild(editor);
    }
  }

}

