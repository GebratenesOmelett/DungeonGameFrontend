export class AuthenticationResponse {
  constructor(
    public email: string,
    public userName: string,
    public token: string,
    public expiresIn: string) {
  }
}
