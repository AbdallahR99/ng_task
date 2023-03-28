export class Address {
  constructor(
    public id = 0,
    public cityName: string = '',
    public countryName: string = '',
    public building: string = '',
  ) {}

  toString(): string {
    return `${this.building}, ${this.cityName}, ${this.countryName}`;
  }
}
