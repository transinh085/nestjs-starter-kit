import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.findByEmail(email);
    if (user && user.password === password) {
      return user;
    }
    throw new UnauthorizedException('Invalid email or password');
  }
}
