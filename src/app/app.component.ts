import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm: NgForm; //com ViewChild posso pegar o form mesmo antes de enviar
  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  /*onSubmit(form: NgForm) { //from é a local reference 'f' no template
    console.log(form);
  }*/
  onSubmit() {
    console.log(this.signupForm);
  }
}
