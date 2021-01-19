import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm: NgForm; //com ViewChild posso pegar o form mesmo antes de enviar
  defaultQuestion = 'pet';
  answer = '';
  genders = ['male', 'female'];

  suggestUserName() {
    const suggestedName = 'Superuser';
    /*this.signupForm.setValue({
      userData: {
        username: suggestedName,
        email: ''
      },
      secret: 'pet',
      questionAnswer: '',
      gender: 'male'
    });*/
    this.signupForm.form.patchValue({ //patchValue update parts of form
      userData: {
        username: suggestedName
      }
    });
  }

  /*onSubmit(form: NgForm) { //from é a local reference 'f' no template
    console.log(form);
  }*/
  onSubmit() {
    console.log(this.signupForm);
  }
}
