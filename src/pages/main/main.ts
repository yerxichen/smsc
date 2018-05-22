import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';


/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {


  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }

  goPage(obj){
    switch (obj) {
      case 1:
        this.navCtrl.push('CpuPage');
        break;
    }
  }
}
