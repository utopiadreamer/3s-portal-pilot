export interface UserDto {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  birthDate?: Date;
  phone: string;
  address: Address;
  company: Company;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;

}
