import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';

import { UserModule } from './user/user.module';
import { CharacterModule } from './character/character.module';
import { ItemModule } from './item/item.module';
import { InventoryModule } from './inventory/inventory.module';
import { SkillModule } from './skill/skill.module';
@Module({
  imports: [
    UserModule,
    AuthModule,
    CharacterModule,
    ItemModule,
    InventoryModule,
    SkillModule,
  ],
  controllers: [AppController],
  providers: [AppService, { provide: APP_GUARD, useClass: JwtAuthGuard }],
})
export class AppModule {}
