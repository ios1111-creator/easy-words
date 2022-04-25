import { Component, OnInit } from '@angular/core';
import {WordsService} from "../../services/words.service";
import {WordType} from "../../data/models";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  word:WordType=null;
  constructor(private wordService: WordsService) { }

  ngOnInit(): void {
    this.fetchWord();
  }
private fetchWord():void{
    this.word=this.wordService.getWords().shift();
}
addToNoun(wordd:WordType){
    this.wordService.addNoun(wordd);
    this.fetchWord();
}
addToVerb(word:WordType){
    this.wordService.addVerb(word);
    this.fetchWord();
}
check(){
    this.wordService.check();
}
}
