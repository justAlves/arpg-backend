import { IsEmail, IsString } from 'class-validator';

export class LoginRequestBody {
  @IsEmail()
  username: string;

  @IsString()
  password: string;
}
