
export class User {
  UserId: number;
  Name: string;
  Email: string;
  Password: string;
  ContactNo: string;
  Role: string;

  constructor() {
    this.ContactNo = '';
    this.Email = '';
    this.Password = '';
    this.Name = '';
    this.UserId = 0;
    this.Role = 'Customer';
  }
}
