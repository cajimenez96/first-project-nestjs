import { Injectable } from '@nestjs/common';
import { SupabaseService } from '../supabase/supabase.service';

@Injectable()
export class UsersService {
  constructor(private readonly supabaseService: SupabaseService) {}

  async getAll() {
    const supabase = this.supabaseService.getClient();
    const { data, error } = await supabase.from('users').select('*');
    if (error) throw new Error(error.message);
    return data;
  }

  async create(user: { name: string; email: string }) {
    const supabase = this.supabaseService.getClient();
    const { data, error } = await supabase.from('users').insert([user]).select();
    if (error) throw new Error(error.message);
    return data[0];
  }
}
