import { Injectable } from '@angular/core';
import {Facility} from "../../model/Facility";
import {FacilityType} from "../../model/FacilityType";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class FacilityServiceService {

  private facility : Facility[] = [];
  private facilityType : FacilityType[] = [];

  constructor(private httpClient: HttpClient) { }

  findAllFacility():Observable<Facility[]>{
    return this.httpClient.get<Facility[]>(
      environment.API_FACILITY + "?_sort=name&_order=desc&_page="
    );
  };

  findAllFacilityType():Observable<FacilityType[]>{
    return this.httpClient.get<FacilityType[]>(
      environment.API_FACILITY_TYPE
    );
  }




}
