/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { userService } from 'src/user/services/user.service';

@Injectable()
export class AuthService {
  constructor(private userService: userService) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userService.findUserByuserName(username);
    const resolvedUser = await firstValueFrom(user);
    const { password: userPassword } = resolvedUser;

    if (user && userPassword === password) {
      const { password, ...result } = resolvedUser;
      return result;
    }
    return null;
  }
}
