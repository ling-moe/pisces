// // database.config.ts
// import { TypeOrmModuleOptions } from '@nestjs/typeorm';

// const databaseConfig: TypeOrmModuleOptions = {
//     type: 'postgres',
//     host: process.env.DB_HOST || 'dpg-cijcvhlgkuvhnnecnh2g-a.singapore-postgres.render.com',
//     port: parseInt(process.env.DB_PORT, 10) || 5432,
//     username: process.env.DB_USERNAME || 'root',
//     password: process.env.DB_PASSWORD || 'VR7HUOH7ZOSRe5LSPHo706e1UwsitBnA',
//     database: process.env.DB_NAME || 'pisces',
//     entities: [__dirname + '/../**/*.entity{.ts,.js}'],
//     synchronize: true, // 在开发环境中可能需要为 true，生产环境请关闭
//   };

//   export default databaseConfig;