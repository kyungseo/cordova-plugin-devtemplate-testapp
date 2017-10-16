import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

declare var SimplePlugin: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  echoMsg: string;
  errMsg: string;
  echoJsMsg: string;
  errJsMsg: string;
  currentDate: string = '';

  constructor(public navCtrl: NavController) {

  }

  simplePluginTest() {
    SimplePlugin.echo(
      'Plugin Ready!',
      (msg) => {
        this.echoMsg = msg;
      },
      (err) => {
        this.errMsg = err;
      }
    );

    SimplePlugin.echojs(
      'Hello Plugin',
      (msg) => {
        this.echoJsMsg = msg;
      },
      (err) => {
        this.errJsMsg = err;
      }
    );

    SimplePlugin.getDate(
      (date) => {
        this.currentDate = date;
      }
    );
  }

  ionViewDidLoad() {
    setTimeout(() => this.simplePluginTest(), 8000);
  }

}
