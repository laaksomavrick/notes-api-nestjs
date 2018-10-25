import { TypeOrmModule } from '@nestjs/typeorm';

export const DatabaseModule = TypeOrmModule.forRoot({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'notes',
  entities: [`../**/*.entity{.ts,.js}`],
  synchronize: true,
});
