import {Component, Input} from '@angular/core';
import {NgClass, NgStyle} from "@angular/common";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  imports: [
    NgClass,
    NgStyle
  ],
  standalone: true
})
export class CardComponent {
  @Input() color = '';
}
