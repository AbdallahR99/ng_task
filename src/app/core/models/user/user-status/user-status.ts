export class UserStatus {
  constructor(
    public id: number = 0,
    public name: string = '',
    public icon: string = null!,
    public items?: string[],
    public status?: UserStatus[],
    public score?: number,
    public value?: number,
    public estimatedValue?: number,
    public info?: {label: string, value: any}
  ) { }
}
