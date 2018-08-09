import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { DataService } from '../../data.service';
import { TouchSequence } from '../../../../node_modules/@types/selenium-webdriver';
declare var $:any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  name :any;
  adress :any;
  contact :any;
  mail :any;
  image :any;
  file :any;
  error :string;

  modelCarry :any;


  constructor(
    private dataService :DataService,
    private router :Router
  ) { }

  ngOnInit() {
    // localStorage.removeItem('users');



  }

  setModel()
  {
    this.router.navigate(['add']);

  }

  closeModel()
  {
    this.router.navigate(['list']);

  }
  addData(username,address,number,email,profile){
    if(username === '' || address === '' || number === '' || email === '' || profile === '')
    {
      console.log('hey');
      this.router.navigate(['list']);

    }
    else
    {
      $('img').attr('src', ''); // Clear the src
    $('img').removeAttr('src');​ // Remove the src



    const rand = Math.random()*1000;

   console.log(profile);

  const data = {
    id: rand,
    username: username,
    address: address,
    number: number,
    email: email,
    profile: profile
  };

  this.name = '';
  this.adress = '';
  this.contact = '';
  this.mail = '';
  this.image = '';
  this.file = '';




  this.modelCarry = 'modal';
  this.dataService.dataCollect(data);
  this.router.navigate(['list']);

    }




  //  console.log(username,address,number,email);
  }

}
