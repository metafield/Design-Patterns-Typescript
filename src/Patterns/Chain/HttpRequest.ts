export class HttpRequest {
  constructor(private username: string, private password: string) {}

  getUsername(): string {
    return this.username;
  }

  getPassword(): string {
    return this.password;
  }
}
