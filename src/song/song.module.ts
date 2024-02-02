import { Module } from '@nestjs/common';
import { SongService } from './song.service';
import { SongController } from './song.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [SongService],
  controllers: [SongController, PrismaService],
})
export class SongModule {}
