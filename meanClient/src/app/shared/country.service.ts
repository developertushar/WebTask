import { Country } from './../country';
import {HttpClient,HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable()
export class CountryService {
  private baseUri :String = 'http://localhost:8080';
  private headers = new HttpHeaders().set('Content-Type','application/json');

  constructor(
    private http: HttpClient,
  ) { }



  createCountry(country:Country)
  {
      return this.http.post(this.baseUri +'/create', country, {headers: this.headers});

  }

  readCountry()
  {
    return this.http.get(this.baseUri + '/read',{headers: this.headers});
  }

  updateCountry(country)
  {
    return this.http.put(this.baseUri+ '/update'+ country,{headers: this.headers});
  }

  deleteCountry(id)
  {
    return this.http.delete(this.baseUri + '/delete' + id, {headers: this.headers});
  }



}
