import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise13',
  templateUrl: './exercise13.page.html',
  styleUrls: ['./exercise13.page.scss'],
})
export class Exercise13Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  questions = [
    {
      question: 'What is the capital of France?',
      options: ['Madrid', 'London', 'Paris', 'Berlin'],
      answer: 2,
      selectedOption: null
    },
    {
      question: 'What is the largest country in the world?',
      options: ['Russia', 'China', 'USA', 'India'],
      answer: 0,
      selectedOption: null
    },
    {
      question: 'What is the smallest country in the world?',
      options: ['Vatican City', 'Monaco', 'Nauru', 'Tuvalu'],
      answer: 0,
      selectedOption: null
    },
    {
      question: "What is the currency of Japan?",
      options: ["Dollar", "Yen", "Euro", "Pound"],
      answer: 1,
      selectedOption: null
    },
  ];

  submitQuiz() {
    let score = 0;
    for (const q of this.questions) {
      if (q.selectedOption === q.answer) {
        score++;
      }
    }
    console.log(`Your score: ${score}/${this.questions.length}`);
  }
}
