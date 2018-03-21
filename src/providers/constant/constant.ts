import { Injectable } from '@angular/core';

import { NativeStorage } from '@ionic-native/native-storage';

/*
  Generated class for the ConstantProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConstantProvider {

  skipTutorial: boolean = true;
  storedData: any;

  constructor(private nativeStorage: NativeStorage) {}

  setSkipTutorial(value:boolean) {
    // this.nativeStorage.clear().then(
	  //    () => this.setItem('tutorialData', {skipTutorial: value}),
	  //    error => console.log("clearing error - " + error)
		// ); 
		 this.setItem("tutorialPage", {skipTutorial:value});
  };	

  getSkipTutorial():boolean {
  	this.getItem('tutorialData').then(data => {
					console.log("stored data in native storage - " + this.storedData);
					if (this.storedData) {
							this.skipTutorial = this.storedData;
							return this.skipTutorial;
					}
		})		
  	return false;
  };

  async setItem(reference: string, value: any) {
		console.log('before Storing item ' + value.skipTutorial);
		try {
				await this
						.nativeStorage
						.setItem(reference, value);

		} catch (e) {
				console.log("Error while storing the item " + e);
		}
  };

  async getItem(reference: string): Promise<any> {
		console.log("reference to the item passed " + reference);
		try {
				let data = await this
						.nativeStorage
						.getItem(reference);
				return data;		
		} catch(e) {
				console.log("Error while fetching stored item :-" + e);
		}
  };
}
