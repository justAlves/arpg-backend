import { Module } from '@nestjs/common';
import { SongService } from './song.service';
import { SongController } from './song.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [SongService, PrismaService],
  controllers: [SongController],
})
export class SongModule {}
