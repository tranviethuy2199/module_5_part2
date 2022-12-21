import {FacilityType} from "./FacilityType";

export interface Facility{
  id:number;
  name:string;
  rentType:FacilityType;
  cost:number;
  peopleAmount:number;
  area:number;
  rentTime:string;
  roomStandard: string; // tiêu chuẩn phòng (villa-room)
  floors:number;        // số tầng (villa-room)
  description:string;   // mô tả tiện nghi khác (villa-room)
  poolAre:number;       // diện tích hồ bơi (villa)
  freeService:string  // dịch vụ miễn phí đi kèm(room)

}
