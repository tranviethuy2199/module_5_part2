import {Component, OnInit} from '@angular/core';
import {Facility} from "../../model/Facility";
import {FacilityType} from "../../model/FacilityType";
import {FormBuilder, FormGroup} from "@angular/forms";
import {FacilityServiceService} from "../../service/facilityService/facility-service.service";
import {CustomerType} from "../../model/CustomerType";

@Component({
  selector: 'app-facility',
  templateUrl: './facility.component.html',
  styleUrls: ['./facility.component.css']
})
export class FacilityComponent implements OnInit {

  facility: Facility[] = [];
  facilityType: FacilityType[] = [];
  facilityFormGroup: FormGroup;
  id: number;



  constructor(private facilityService: FacilityServiceService,
              private formBuilder: FormBuilder) {
    this.facilityService.findAllFacility().subscribe(data => {
       console.log(data)
        this.facility = data;
      },error => {
      console.log("lấy danh sách thất bại")
      },() =>{
      console.log("kết thúc")
      }
    )
  }

  ngOnInit(): void {
    this.facilityService.findAllFacilityType().subscribe(data =>{
       this.facilityType = data;
    })
  }

}
