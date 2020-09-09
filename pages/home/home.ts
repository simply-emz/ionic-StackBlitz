import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  styleUrls: ['./home.scss']
})

export class HomePage {
  initValue: number;
  outValue: number;

  constructor(public navCtrl: NavController) {

  }

  compute() {
    this.outValue=this.initValue * 0.40;
  }

}
