import {Component, Input, OnInit} from '@angular/core';
import {WordType} from "../../data/models";

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css']
})
export class AnswersComponent implements OnInit {
@Input() words:WordType[];
@Input() title;
  constructor() { }

  ngOnInit(): void {
  }

}
