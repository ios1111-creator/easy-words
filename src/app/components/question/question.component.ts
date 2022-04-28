import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {WordsService} from "../../services/words.service";
import {WordType} from "../../data/models";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit,OnDestroy {

  word: WordType = null;
  private words = [];
  private subscription: Subscription;

  constructor(private wordService: WordsService) {
  }

  ngOnInit(): void {
    this.subscription = this.wordService.getWords().subscribe((words) => {
      this.words = words;
      this.fetchWord();
    })
  }

  private fetchWord(): void {
    this.word = this.words.shift();
  }

  addToNoun(wordd: WordType) {
    this.wordService.addNoun(wordd);
    this.fetchWord();
  }

  addToVerb(word: WordType) {
    this.wordService.addVerb(word);
    this.fetchWord();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

}


