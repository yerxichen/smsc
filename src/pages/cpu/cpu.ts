import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
// import {HttpServiceProvider} from "../../providers/http-service/http-service";
import axios from 'axios'


/**
 * Generated class for the CpuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cpu',
  templateUrl: 'cpu.html',
})
export class CpuPage {

  public items = [];
  page: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.init();
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad CpuPage');
  // }

  init() {
    let _self = this;
    axios.get('/cpu', {
      params: {
        page: ++_self.page,
        size: 10
      }
    }).then(function (response) {
      //alert(IMG_BASE_URL);
      let data = response['data']['content']
      //alert(JSON.stringify(data));
      if (data.length > 0) {
        for (let i = 0; i < data.length; i++) {
          _self.items.push(data[i]);
        }
      }


    }).catch(function (error) {
      alert(error)
    });
  }

  doInfinite(infiniteScroll) {
    let _self = this;
    axios.get('/cpu', {
      params: {
        page: ++_self.page,
        size: 10
      }
    }).then(function (response) {
      //alert(IMG_BASE_URL);
      let data = response['data']['content']
      //alert(JSON.stringify(data));
      if (data.length > 0) {
        for (let i = 0; i < data.length; i++) {
          _self.items.push(data[i]);
        }
        infiniteScroll.complete();
      } else {
        infiniteScroll.enable(false);
      }


    }).catch(function (error) {
      alert(error)
    });

  }

  detail(xxzjbh){
    this.navCtrl.push('CpuDetailPage',{xxzjbh:xxzjbh});
  }


}
