import { Component } from '@angular/core';
import {WordsService} from "./services/words.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'easy-words';
  constructor(private serviceWords:WordsService) {
  }
  get nouns(){
    return this.serviceWords.getNoun();
  }
  get verbs(){
    return this.serviceWords.getVerb();
  }
}
