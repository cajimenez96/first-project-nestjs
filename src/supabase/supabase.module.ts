import { Module, Global } from '@nestjs/common';
import { SupabaseService } from './supabase.service';
import { ConfigModule } from '@nestjs/config';

@Global() // <-- hace que este módulo esté disponible en toda la app
@Module({
  imports: [ConfigModule],
  providers: [SupabaseService],
  exports: [SupabaseService], // <-- lo exportamos para usarlo en otros módulos
})
export class SupabaseModule {}
