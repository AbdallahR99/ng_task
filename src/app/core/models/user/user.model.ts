import { Gender } from "@core/constants/gender.enum";
import { ResidentStatus } from "@core/constants/resident-status.enum";
import { UserAddress } from "./user-address/user-address.model";
import { UserStatus } from "./user-status/user-status";

export class User {
  constructor(
    public id: number = 0,
    public eid: string = null!,

    public avatarUrl: string = null!,
    public name: string = null!,
    public nameEnglish: string = null!,
    public email: string = null!,
    public phone: string = null!,
    public gender: Gender = null!,
    public nationalityName: string = null!,
    public profession: string = null!,
    public overallScore: number = 0,
    public overallValue: number = 0,
    public residentStatus: ResidentStatus = null!,
    public userAddress: UserAddress = null!,
    public userStatus: UserStatus[] = null!,
    public birthOfDate: Date = null!,
    public currency: string = 'AED',
  ) {}
}

