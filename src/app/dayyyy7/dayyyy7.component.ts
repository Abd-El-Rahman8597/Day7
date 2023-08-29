import { Component } from '@angular/core';

@Component({
  selector: 'app-dayyyy7',
  templateUrl: './dayyyy7.component.html',
  styleUrls: ['./dayyyy7.component.css']
})
export class Dayyyy7Component {
logo:string="Netflix"
dayyyy7Links:string[]=['Home','Movies','TVShow','About','contact us'];
language:string='En-Us';
constructor (){}
  changelanguage() {
this.language=this.language=='En-Us' ? 'Ar-Sa' : 'En-Us' ;

  }

}
