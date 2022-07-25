import { Component, ContentChild, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'poc-ticket-layout',
  templateUrl: './ticket-layout.component.html',
  styleUrls: ['./ticket-layout.component.scss'],
})
export class TicketLayoutComponent {
  @ContentChild('side') side!: TemplateRef<unknown>;
  @ContentChild('main') main!: TemplateRef<unknown>;
  @ContentChild('related') related!: TemplateRef<unknown>;
}
