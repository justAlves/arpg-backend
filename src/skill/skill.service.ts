import { Injectable } from '@nestjs/common';
import { CreateSkillDto } from './dto/create-skill.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SkillService {
  constructor(private prisma: PrismaService) {}

  async create(createSkillDto: CreateSkillDto) {
    const { name, description, characterId } = createSkillDto;

    const skill = await this.prisma.skill.create({
      data: {
        name,
        description,
        characterId: characterId,
      },
    });

    return skill;
  }

  async remove(id: string) {
    const skill = await this.prisma.skill.delete({
      where: { id: id },
    });

    return skill;
  }
}
