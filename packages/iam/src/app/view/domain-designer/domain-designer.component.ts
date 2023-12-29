import { Component, ElementRef, NO_ERRORS_SCHEMA, OnInit, ViewChild } from "@angular/core";
import { CommonModule } from '@angular/common';
import { createEmptyPage, DocEditor } from "@blocksuite/presets";

@Component({
  selector: 'pisces-domain-designer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './domain-designer.component.html',
  styleUrl: './domain-designer.component.scss',
  schemas: [NO_ERRORS_SCHEMA]
})
export class DomainDesignerComponent implements OnInit {

  @ViewChild('container', {static: true})
  container!: ElementRef;

  ngOnInit(): void {

    const editor = new DocEditor();
    editor.page = createEmptyPage().init();
    this.container.nativeElement.appendChild(editor);

  }

}
