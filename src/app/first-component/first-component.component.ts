import { Component, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import {User} from '../user';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {

  dcheroes: string[] = ["Batman", "Superman", "Flash"];
  togleheroes: boolean = true;
  selectedhero: string = "";
  mystyle:{};
  Userlist:User[]=[];
  addUser(Y)
  {
    console.log(Y.value);
  }


  setstyle()
  {
    this.mystyle= {
      "font-size":"24px",
      "font-weight":"bold",
      "color": "green"
    }
  }

  toglehero() {
    this.togleheroes = !this.togleheroes;

  }

  SelectHero(hero) {
    this.selectedhero = hero;
    console.log(hero);

  }

  constructor() { }

  ngOnInit() {
  }

}
