
export class Decode {
    username: string;
    permissions: Array<string>

  constructor(username: string, permissions: Array<string>){
    this.username = username;
    this.permissions = permissions
  }
}
