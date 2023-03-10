import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  formLogin!:FormGroup;

  msgCorreoInvalido = false;
  msgCorreoValido = false;

  constructor( private formBuilder: FormBuilder ){
    this.formLogin = new FormGroup({
      user: new FormControl(),
      password: new FormControl(),
      termino: new FormControl()
    })
  }

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      user:['', 
        [
          Validators.required,
          Validators.minLength(5),
          Validators.email
        ]
      ],
      password:['', 
        [
          Validators.required,
          Validators.minLength(4),
          Validators.pattern('^[a-zA-Z0-9]+$')
        ]
      ],
      termino:['', 
        [
          Validators.requiredTrue,
        ]
      ]
    });
  }

  onSubmit(){
    this.msgCorreoValido = true;
    setTimeout(() => {
      this.msgCorreoValido = false;
    }, 6000);
  }
}
