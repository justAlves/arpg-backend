import { Injectable } from '@nestjs/common';
import { CreateCharacterDto } from './dto/create-character.dto';
import { UpdateCharacterDto } from './dto/update-character.dto';

@Injectable()
export class CharacterService {
  create(createCharacterDto: CreateCharacterDto) {
    return createCharacterDto;
  }

  findAll() {
    return `This action returns all character`;
  }

  findOne(id: number) {
    return `This action returns a #${id} character`;
  }

  update(id: number, updateCharacterDto: UpdateCharacterDto) {
    return { id, ...updateCharacterDto };
  }

  remove(id: number) {
    return `This action removes a #${id} character`;
  }
}
