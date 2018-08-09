import { Router } from '@angular/router';
import { DataService } from './../../data.service';
import { CountryService } from './../../shared/country.service';
declare var $:any;

import { Component, OnInit } from '@angular/core';
import {Country} from '../../country';
import { IfObservable } from '../../../../node_modules/rxjs/observable/IfObservable';
import { $ } from '../../../../node_modules/protractor';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  private countries :Country[];

  newData :any;

  userData : any;

  name :any;
  adress: any;
  contact :any;
  mail :any;
  userId :any;
  profile :any;

  constructor(
    private userService : CountryService,
    private dataService : DataService,
    private router : Router
  ) { }

  ngOnInit() {
    // this.letsReadData();
    this.userData = this.dataService.getData();
    console.log(this.userData);



  }

  // letsReadData()
  // {
  //   this.dataService.readCountry().subscribe((data)=>{
  //    console.log(data);
  //       // this.countries = data['msg'];
  //   },
  //   (error)=>{
  //     console.log(error);
  //   }
  // );
  // }

  deleteData(data)
  {


    // console.log(data);
    console.log(JSON.parse(localStorage.getItem('users')));
      for(let i=0 ; i<this.userData.length; i++)
      {

        console.log(this.userData[i].email);
        if(this.userData[i].id === data.id )
        {
          console.log(this.userData[i]);
          this.userData.splice(i, 1);
        }

      }

        localStorage.removeItem('users');

        localStorage.setItem('users', JSON.stringify(this.userData));

        console.log('hey how are you');
        console.log(JSON.parse(localStorage.getItem('users')));

  }




  updateData(data)
  {
    this.adress = data.address;
    this.name = data.username;
    this.contact = data.number;
    this.mail = data.email;
    this.userId = data.id;
    this.profile = data.profile;
    console.log(this.profile);


    console.log(data);
    // this.router.navigate(['add']);






  }

  closeModel()
  {
    this.router.navigate(['list']);
  }

  addData(username,address,number,email,contact){

    const data = {

      username: username,
      address: address,
      number: number,
      email: email
    };

    for(let  i=0; i< this.userData.length;i++)
    {
        if(this.userData[i].id === this.userId){
          console.log('matched');
          this.userData[i].username = username;
          this.userData[i].address = address;
          this.userData[i].number = number;
          this.userData[i].email = email;
          this.userData[i].contact = contact;
        }

    }

    this.newData = JSON.parse(localStorage.getItem('users'));

    console.log(this.newData);
    for(let  i=0; i< this.newData.length;i++)
    {
        if(this.userData[i].id === this.userId){
          console.log('matched');
          this.newData[i].username = username;
          this.newData[i].address = address;
          this.newData[i].number = number;
          this.newData[i].email = email;
          this.newData[i].contact = contact;

        }

    }

    localStorage.setItem('users',JSON.stringify(this.newData));




  //  console.log(data);

    }



}
