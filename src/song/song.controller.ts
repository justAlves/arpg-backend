import { Body, Controller, Delete, Param, Post } from '@nestjs/common';
import { SongService } from './song.service';
import { CreateSongDto } from './dto/create-song-dto';

@Controller('song')
export class SongController {
  constructor(private songService: SongService) {}

  @Post()
  create(@Body() createSongDto: CreateSongDto) {
    return this.songService.create(createSongDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.songService.remove(id);
  }
}
