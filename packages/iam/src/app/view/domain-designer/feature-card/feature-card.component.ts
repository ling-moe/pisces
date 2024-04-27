import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { baseTextAttributes, InlineEditor } from '@blocksuite/inline';
import { Doc } from 'yjs';
import { z } from 'zod';

const customSchema = baseTextAttributes.extend({
  reference: z
    .object({
      type: z.enum([
        'LinkedPage',
      ]),
      pageId: z.string(),
    })
    .optional()
    .nullable()
    .catch(undefined),
  background: z.string().optional().nullable().catch(undefined),
  color: z.string().optional().nullable().catch(undefined),
});

const attrs = ['userStory', 'action', 'event', 'command', 'role', 'case'] as const;

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

  editors: Record<typeof attrs[number], InlineEditor> = {} as Record<typeof attrs[number], InlineEditor>;

  ngAfterViewInit(): void {

    const doc = new Doc();
    for (const attr of attrs) {
      const inlineEditor = new InlineEditor(doc.getText(attr));
      inlineEditor.setAttributeSchema(customSchema);
      inlineEditor.mount(this[attr].nativeElement);
      this.editors[attr] = inlineEditor;
    }

  }

}
