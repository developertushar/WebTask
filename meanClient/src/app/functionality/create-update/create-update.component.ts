import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { DataService } from '../../data.service';


@Component({
  selector: 'app-create-update',
  templateUrl: './create-update.component.html',
  styleUrls: ['./create-update.component.css']
})
export class CreateUpdateComponent implements OnInit {

  constructor(
    private router: Router,
    private dataService: DataService
  ) { }

  ngOnInit() {
  }


  getFormData(myForm, values) {

    console.log(values);
    myForm.reset();
    this.dataService.dataCollect(values);
    this.router.navigate(['list']);


  }
}
