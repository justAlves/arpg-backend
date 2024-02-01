import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Request,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { CharacterService } from './character.service';
import { CreateCharacterDto } from './dto/create-character.dto';
import { UpdateCharacterDto } from './dto/update-character.dto';
import { AuthRequest } from 'src/auth/models/AuthRequest';

@Controller('character')
export class CharacterController {
  constructor(private readonly characterService: CharacterService) {}

  @Post()
  @HttpCode(HttpStatus.OK)
  create(
    @Body() createCharacterDto: CreateCharacterDto,
    @Request() req: AuthRequest,
  ) {
    return this.characterService.create(createCharacterDto, req.user.id);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll() {
    return this.characterService.findAll();
  }

  @Get('/mine')
  @HttpCode(HttpStatus.OK)
  findAllMyCharacters(@Request() req: AuthRequest) {
    return this.characterService.findMyCharacters(req.user.id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.characterService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCharacterDto: UpdateCharacterDto,
  ) {
    return this.characterService.update(id, updateCharacterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.characterService.remove(id);
  }
}
