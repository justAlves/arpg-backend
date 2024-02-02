import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSongDto } from './dto/create-song-dto';

@Injectable()
export class SongService {
  constructor(private prisma: PrismaService) {}

  async create(createSongDto: CreateSongDto) {
    const { name, description, characterId } = createSongDto;

    const song = await this.prisma.song.create({
      data: {
        name,
        description,
        characterId,
      },
    });

    return song;
  }

  async remove(id: string) {
    const song = await this.prisma.song.delete({
      where: { id: id },
    });

    return song;
  }
}
