import nodeConfig from "@app/common/config/env/node.config";
import swaggerConfig from "@app/common/config/env/swagger.config";
import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [".env"],
      load: [nodeConfig, swaggerConfig],
    }),
  ],
})
export class AppModule {}
