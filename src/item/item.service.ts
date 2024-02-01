import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ItemService {
  constructor(private prisma: PrismaService) {}

  async create(createItemDto: CreateItemDto) {
    const { name, description, type } = createItemDto;

    const item = await this.prisma.item.create({
      data: {
        name,
        description,
        type,
      },
    });

    return item;
  }

  async findAll() {
    const items = await this.prisma.item.findMany();
    return items;
  }

  async findOne(id: string) {
    const item = await this.prisma.item.findUnique({
      where: { id },
    });

    if (!item) {
      throw new NotFoundException('Item not found');
    }

    return item;
  }
}
