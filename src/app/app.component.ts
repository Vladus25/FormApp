import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FormApp';

  constructor(private fb:FormBuilder){

  }
  myform=this.fb.group({
    name:['',Validators.required],
    indirizzo:this.fb.group({
      via:['',Validators.required]
    })
  })

  onSubmit(){
    console.log(this.myform.value);
  };

  // nome!: string;
  // cognome!: string;

  // invio(form: any){
  //   console.log(JSON.stringify(form));
  //   console.log(form.nome);
  //   console.log(form.cognome);
  // }

  // model = new User()

}

// export class User{
//   nome!: string;
//   cognome!: string;
// }
