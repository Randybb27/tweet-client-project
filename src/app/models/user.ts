export class User {
    email?: string;
    password?: string;
    firstName?: string;
    lastName?: string;
    userName?: string;
    city?: string;
    state?: string;
  
    constructor(email?: string, password?: string, firstName?: string, lastName?: string, userName?: string, city?: string, state?: string,) {
      this.email = email;
      this.password = password;
      this.firstName = firstName;
      this.lastName = lastName;
      this.userName = userName;
      this.city = city;
      this.state = state;
    }
}
