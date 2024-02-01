import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { hash } from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create({ email, password, username }: CreateUserDto) {
    if (!email || !password || !username) {
      throw new BadRequestException('Please provide all required fields');
    }

    const userAlreadyExists = await this.prisma.user.findFirst({
      where: { email },
    });

    if (userAlreadyExists) {
      throw new BadRequestException('User already exists');
    }

    const hashedPassword = await hash(password, 10);

    const user = await this.prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        username,
      },
      select: {
        id: true,
        email: true,
        username: true,
      },
    });

    return user;
  }

  async findOne(id: string) {
    const user = await this.prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        email: true,
        username: true,
        admin: true,
        characters: true,
        displayName: true,
      },
    });

    if (!user) {
      throw new BadRequestException('User not found');
    }

    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    console.log('updateUserDto:', updateUserDto);

    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  async findByUsername(username: string) {
    return await this.prisma.user.findUnique({
      where: { username },
    });
  }
}
