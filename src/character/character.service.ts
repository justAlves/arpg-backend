import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCharacterDto } from './dto/create-character.dto';
import { UpdateCharacterDto } from './dto/update-character.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CharacterService {
  constructor(private prisma: PrismaService) {}

  async create(createCharacterDto: CreateCharacterDto, userId: string) {
    const {
      name,
      background,
      strength,
      dexterity,
      intelligence,
      willing,
      charisma,
      sword,
      bow,
      magic,
      stealth,
      persuasion,
      athletics,
      shield,
      medicine,
      art,
    } = createCharacterDto;

    const character = await this.prisma.character.create({
      data: {
        name,
        background,
        strength,
        dexterity,
        intelligence,
        willing,
        charisma,
        sword,
        bow,
        magic,
        stealth,
        persuasion,
        athletics,
        shield,
        medicine,
        art,
        userId,
      },
    });

    return character;
  }

  async findAll() {
    const characters = await this.prisma.character.findMany();

    return characters;
  }

  async findMyCharacters(userId: string) {
    const characters = await this.prisma.character.findMany({
      where: {
        userId,
      },
    });

    return characters;
  }

  async findOne(id: string) {
    const character = await this.prisma.character.findUnique({
      where: {
        id,
      },
    });

    if (!character) {
      throw new NotFoundException('Character not found');
    }

    return character;
  }

  update(id: number, updateCharacterDto: UpdateCharacterDto) {
    return { id, ...updateCharacterDto };
  }

  remove(id: number) {
    return `This action removes a #${id} character`;
  }
}
