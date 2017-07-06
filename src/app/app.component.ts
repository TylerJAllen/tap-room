import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  masterKegList: Keg[] = [
    // new Keg('Negra', 'Modelo', 5.4, 3),
    // new Keg('Especial', 'Modelo', 4.4, 4),
    // new Keg('Chelada Especial', 'Modelo', 3.5, 5),
    // new Keg('Chelada Tamarindo Picante', 'Modelo', 3.3, 6)
  ];

  addKeg(newKegFromChild: Keg) {
    this.masterKegList.push(newKegFromChild);
    console.log("ping");
    console.log(this.masterKegList);
  }
}
