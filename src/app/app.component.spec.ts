import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('Espero que el formulario sea invalido', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    let user = app.formLogin.controls['user'];
    let password = app.formLogin.controls['password'];

    user.setValue('12345');
    password.setValue('a@b.com');

    expect(app.formLogin.invalid).toBeFalsy();
  })

  it('Espero que el formulario sea valido', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    let user = app.formLogin.controls['user'];
    let password = app.formLogin.controls['password'];

    user.setValue('a@b.com');
    password.setValue('12345');

    expect(app.formLogin).toBeTruthy();
  })
});
