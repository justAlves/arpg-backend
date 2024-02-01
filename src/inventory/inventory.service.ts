import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AddItemDto } from './dtos/add-item-dto';

@Injectable()
export class InventoryService {
  constructor(private prisma: PrismaService) {}

  async addItemToInventory(addItemDto: AddItemDto) {
    const { characterId, itemId } = addItemDto;

    const inventory = await this.prisma.itemOnCharacter.create({
      data: {
        character: {
          connect: { id: characterId },
        },
        item: {
          connect: { id: itemId },
        },
      },
      include: {
        item: true,
        character: true,
      },
    });

    return inventory;
  }

  async removeItemFromInventory(removeItemDto: AddItemDto) {
    const { characterId, itemId } = removeItemDto;

    const inventory = await this.prisma.itemOnCharacter.delete({
      where: {
        characterId_itemId: {
          characterId,
          itemId,
        },
      },
    });

    return inventory;
  }
}
