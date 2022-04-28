import {Component} from '@angular/core';
import {WordsService} from "./services/words.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'easy-words';
  nouns = this.serviceWords.getNoun();
  verbs = this.serviceWords.getVerb()

  constructor(private serviceWords: WordsService) {
  }

}
