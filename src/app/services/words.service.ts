import {Injectable} from '@angular/core';
import {Type, WordType} from "../data/models";
import {WORDS} from "../data/data-bsae";

@Injectable({
  providedIn: 'root'
})
export class WordsService {

  private words: WordType[] = [];
  private nouns: WordType[] = [];
  private verbs: WordType[] = [];

  constructor() {
    this.words = WORDS;
  }

  getWords(): WordType[] {
    return this.words
  }

  getNoun(): WordType[] {
    return this.nouns
  }

  getVerb(): WordType[] {
    return this.verbs;
  }

  addNoun(value: WordType): void {
    this.nouns.push(value);
  }

  addVerb(value: WordType): void {
    this.verbs.push(value);
  }

  check() {
    this.nouns.map(word => (word.correct = word.type === Type.NOUN));
    this.verbs.map(word => (word.correct = word.type === Type.VERB));
  }
}
