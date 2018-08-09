import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable()
export class DataService {

  userData = [];
  userNewData = [];
  constructor(
    private router:Router
  ) { }


  dataCollect(getData)
  {
    // console.log(getData);

    if(localStorage.getItem('users') == null)
    {
      this.userData.push(getData);
      localStorage.setItem('users' , JSON.stringify(this.userData));
      this.userData = [];
    } else
    {
      this.userData = [];
      this.userData = JSON.parse(localStorage.getItem('users'));
      this.userData.push(getData);
      localStorage.setItem('users' , JSON.stringify(this.userData));

    }

    this.router.navigate(['list']);

  }

  getData()
  {
    this.userNewData = JSON.parse(localStorage.getItem('users'));
   return this.userNewData;
  }

}
