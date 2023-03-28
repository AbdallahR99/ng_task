import { Address } from "./address.model";

export class UserAddress {
  constructor(
    public id: number = 0,
    public userId: number = 0,
    public primaryAddress: Address = null!,
    public secondaryAddress: Address = null!,
    public otherAddresses: Address[] = null!,
  ) {}
}

