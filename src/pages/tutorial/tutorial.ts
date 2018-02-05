import { Component, ViewChild, trigger, transition, style, state, animate, keyframes } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { Slides } from 'ionic-angular';


import { TabsPage } from '../tabs/tabs';
import { ConstantProvider } from '../../providers/constant/constant';

/**
 * Generated class for the TutorialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html',
  animations: [
    
  trigger('bounce', [
        state('*', style({
            transform: 'translateX(0)'
        })),
        transition('* => rightSwipe', animate('700ms ease-out', keyframes([
          style({transform: 'translateX(0)', offset: 0}),
          style({transform: 'translateX(-65px)',  offset: 0.3}),
          style({transform: 'translateX(0)',     offset: 1.0})
        ]))),
        transition('* => leftSwipe', animate('700ms ease-out', keyframes([
          style({transform: 'translateX(0)', offset: 0}),
          style({transform: 'translateX(65px)',  offset: 0.3}),
          style({transform: 'translateX(0)',     offset: 1.0})
        ])))
    ])
  ]
})
export class TutorialPage {

  @ViewChild(Slides) slides: Slides;	

  skipMsg: string = "Skip";
  state: string = 'x';

  constructor(public navCtrl: NavController, 
  			  public navParams: NavParams, 
  			  public modalCtrl: ModalController,
  			  public constantService: ConstantProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TutorialPage');
  }

  skip() {
  	this.constantService.setSkipTutorial(true);
    this.navCtrl.setRoot(TabsPage, null, {animate: true});
  	//let modal = this.modalCtrl.create(TabsPage);
  	//modal.present();
  }

  slideChanged() {
    if (this.slides.isEnd()) {

      this.skipMsg = "Let's Get Started!";
    } else {
    	this.skipMsg = "Skip";
    }
  }

  slideMoved() {
    if (this.slides.getActiveIndex() >= this.slides.getPreviousIndex()) 
      this.state = 'rightSwipe';
    else 
      this.state = 'leftSwipe';
  }

  animationDone() {
    this.state = 'x';
  }

}
