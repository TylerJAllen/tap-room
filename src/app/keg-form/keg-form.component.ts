import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Keg } from '../keg.model';
@Component({
  selector: 'keg-form',
  templateUrl: './keg-form.component.html',
  styleUrls: ['./keg-form.component.css']
})
export class KegFormComponent implements OnInit {
  @Output() newKegSender = new EventEmitter();

  submitForm(name: string, brand: string, abv: number, price: number ) {
    var newKegAdd: Keg = new Keg(name, brand, abv, price);
    this.newKegSender.emit(newKegAdd);
  }
  // constructor() {}
  ngOnInit() {}
}
