import { Address } from "@core/models/user/user-address/address.model";
import { UserAddress } from "@core/models/user/user-address/user-address.model";
import { UserStatus } from "@core/models/user/user-status/user-status";
import { User } from "@core/models/user/user.model";
import { Gender } from "./gender.enum";
import { ResidentStatus } from "./resident-status.enum";
// Mock data for UserStatus class
export const listOfUserStatus: UserStatus[] = [
  new UserStatus(1, 'Wealth', 'assets/icons/wealth.svg', [
    'Ownership',
    'Employment',
    'Inheritance',
    'Salary',
    'Retirement',
    'Investments',
    'Entrepreneurship',
  ]),
  new UserStatus(2, 'Health', 'assets/icons/health.svg', [
    'Treatments',
    'Disability',
    'Profile',
    'Insurance',
    'Mental Health',
    'Dependents',
    'Chronic Illness',
  ]),
  new UserStatus(3, 'Biometrics', 'assets/icons/biometrics.svg', [
    'Blood type',
    'Fingerprint',
    'Distinguishing',
    'Facial Recognition',
    'Features',
  ]),
  new UserStatus(4, 'Behavior', 'assets/icons/behavior.svg', [
    'Religious obligations',
    'Commitments',
    'Social Services',
    'Travel',
    'Media Consumption',
  ]),
  new UserStatus(5, 'Military', 'assets/icons/military.svg', [
    'Military record',
    'Voluntary Service',
    'Mandatory Service',
  ]),
  new UserStatus(6, 'Legal', 'assets/icons/legal.svg', [
    'Court Interactions',
    'Fines',
    'Jail Time',
    'Charges',
    'Offences',
  ]),

];
export const userStatus: UserStatus = new UserStatus(
  1,
  'Resident',
  'home',
  ['Primary', 'Secondary'],
  [
    new UserStatus(11, 'Primary', 'home', undefined, undefined, 70, 80, 90),
    new UserStatus(12, 'Secondary', 'home', undefined, undefined, 50, 60, 70),
  ],
  80,
  85,
  95,
  { label: 'Info', value: 'Lorem ipsum dolor sit amet' }
);

// Mock data for User class
export const user: User = new User(
  1,
  '784-1989-5289467-7',
  'assets/images/avatar.png',
  'أحمد محمد',
  'Ahmed Mohammad',
  'Ahmed.mohammad@mail.com',
  '+971 64 6484 6737',
  Gender.Male,
  'United Arab Emirates',
  'Manager',
  4.0,
  28836000,
  ResidentStatus.Active,
  {
    id: 1,
    userId: 1,
    primaryAddress: new Address(1, 'New York', 'USA', '123 Main St'),
    secondaryAddress: new Address(2, 'Los Angeles', 'USA', '456 Elm St'),
    otherAddresses: [
      new Address(3, 'San Francisco', 'USA', '789 Oak St'),
      new Address(4, 'Chicago', 'USA', '321 Pine St'),
    ],
  },
  listOfUserStatus,
  new Date(190, 12, 8),
);




// Mock data for Address class
export const address: Address = new Address(
  1,
  'New York',
  'USA',
  '123 Main St'
);

// Mock data for UserAddress class
export const userAddress: UserAddress = new UserAddress(
  1,
  1,
  new Address(1, 'New York', 'USA', '123 Main St'),
  new Address(2, 'Los Angeles', 'USA', '456 Elm St'),
  [
    new Address(3, 'San Francisco', 'USA', '789 Oak St'),
    new Address(4, 'Chicago', 'USA', '321 Pine St'),
  ]
);
