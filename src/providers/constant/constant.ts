import { Injectable } from '@angular/core';

import { NativeStorage } from '@ionic-native/native-storage';

/*
  Generated class for the ConstantProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConstantProvider {

  skipTutorial: boolean;	
  storedData: any;

  constructor(private nativeStorage: NativeStorage) {}

  setSkipTutorial(value:boolean) {
    this.nativeStorage.clear().then(
	     () => this.setItem('tutorialData', {skipTutorial: value}),
	     error => console.log("clearing error - " + error)
    ); 
  };	

  getSkipTutorial():boolean {
  	this.getItem('tutorialData');
		console.log("stored data in native storage - " + this.storedData);
		if (this.storedData) {
			this.skipTutorial = this.storedData;
		} else {
			this.skipTutorial = false;
		}
  	return this.skipTutorial;
  };

  setItem(reference: string, value: any) {
  	console.log('before Storing item ' + value.skipTutorial);
		this.nativeStorage.setItem(reference, value)
				.then(
					() => console.log('Stored item!' + value),
					error => console.log('Error storing item - ' + error)
				);
  };

  getItem(reference: string) {
  	console.log("reference to the item passed " + reference);
  	this.nativeStorage.getItem(reference)
		  .then(
		    data => console.log("data retrieved - " + data.skipTutorial),
		    error => console.log("getting error - " + error)
		  );
  };
}
