import { Body, Controller, Delete, HttpCode, Post } from '@nestjs/common';
import { InventoryService } from './inventory.service';
import { AddItemDto } from './dtos/add-item-dto';

@Controller('inventory')
export class InventoryController {
  constructor(private readonly inventoryService: InventoryService) {}

  @Post()
  @HttpCode(201)
  AddItemToInventory(@Body() addItemDto: AddItemDto) {
    return this.inventoryService.addItemToInventory(addItemDto);
  }

  @Delete()
  @HttpCode(201)
  RemoveItemFromInventory(@Body() removeItemDto: AddItemDto) {
    return this.inventoryService.removeItemFromInventory(removeItemDto);
  }
}
