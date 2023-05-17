import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-un-common-page',
  templateUrl: './un-common-page.component.html',
  styleUrls: ['./un-common-page.component.css']
})
export class UnCommonPageComponent {

  // i18n Select
  public name: string = 'John';
  public gender: 'male'|'female' = 'male';
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  };
  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  changeClient():void {
    this.name = 'Mary';
    this.gender = 'female';
  }

  // i18n Plural
  public clients: string[] = ['John', 'Mary', 'Wendy', 'Peter', 'Paul', 'Mark', 'Luke', 'John', 'Mary'];

  deleteClient():void {
    this.clients.pop();
  }

  // KeyValue Pipe
  public person = {
    name: 'John',
    age: 35,
    address: 'New York, USA'
  }

  // Async Pipe
  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap(value => console.log('Async Pipe: ', value) )
  );

  // public promiseValue: Promise<string> = new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve('Promise resolved');
  //     console.log('Promise resolved');
  //   }, 3500);
  // }
  // );
}
