import { Component } from '@angular/core';
import { Student } from '../../shared/student.model';

@Component({
  // select: '[app-server]',
  selector: 'app-server',
  templateUrl: './server.component.html', // you can put real html here
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
    meat: string;
    vegetable: string;
    message = '';
    isValidMeat() {
      if (this.meat === 'beef' || this.meat === 'pork' ||
        this.meat === 'chicken' || this.meat === 'fish' ||
        this.meat === 'lamb' ) {
        return true;
      }
      return false;
    }
    isValidVegetable() {
      if (this.vegetable === 'tomato' || this.vegetable === 'potato' ||
        this.vegetable === 'cabbage' || this.vegetable === 'lettuce') {
        return true;
      }
      return false;
    }
    cook() {
      if (this.meat == '' && this.isValidVegetable()) {
        this.message = this.vegetable + ' salad';
        return;
      }
      if (this.isValidMeat() && this.vegetable == '') {
        this.message = 'fried ' + this.meat;
        return;
      }
      if(this.isValidMeat() && this.isValidVegetable()) {
        this.message = 'fried ' + this.meat + ' and ' + this.vegetable;
        return;
      }
      this.message = 'you created dark matter!';
    }
    reset() {
      this.meat = '';
      this.vegetable = '';
      this.message = '';
    }
}
