import { Component } from '@angular/core';
import { Social } from '../social/social';

@Component({
  selector: 'app-contact',
  imports: [Social],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  title:string = "Del is here!";

  test = (10 > 2) ? "yes" : "no";
  truthnuke = "thebestever";

  btnClick(param:string) {
    this.title = "Congrats!! You clicked the button!";
    this.truthnuke = "thecoolest!" + param;
  }
}
