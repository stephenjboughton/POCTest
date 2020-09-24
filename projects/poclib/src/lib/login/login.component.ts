import { Component, EventEmitter, Output } from '@angular/core';
// import { LoginService } from './login.service'
import { Person } from './person';

@Component({
    selector: 'test-login',
    templateUrl: './login.component.html'
})
export class LoginComponent {
  constructor(
    // private loginService: LoginService
  ) { }

  public record: { email?: string; handle?: string; } = {};
  public person: Person = new Person();

  /**
   * Event emitted when "Get Started" is clicked.
   */
  @Output()
  public emitPersonForLogin: EventEmitter<Person> = new EventEmitter();
  


  public login() {
    //   this.loginService.shareWithConsole(this.person);
    this.emitPersonForLogin.emit(this.person);
  }


  /**
   * Set the currently selected person.
   */
  public setPerson(person: Person): void {
    this.person = person;
    this.record.email = this.person.Handle;
  }

  /**
   * Set blank record for new login.
   */
  public addPerson(): void {
    this.record = {};

  }



  /**
   * User authentication.
   */
  public authenticate(): Promise<void> {
    return ;
  }

}
