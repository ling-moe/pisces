
import { MusubiModule } from "@pisces/musubi/server";
import { UserRepository } from "./repository/user.repository";
import { RoleRepository } from "./repository/role.repository";
import { MenuRepository } from "./repository/menu.repository";
import { AuthController } from "./controller/auth.controller";
import { CacheModule } from "@pisces/core/backend/cache/cache.module";

@MusubiModule({
  imports: [
    CacheModule
  ],
  remotes: [
    UserRepository,
    RoleRepository,
    MenuRepository,
  ],
  controllers: [
    AuthController
  ]
})
export class IamBackendModule {}
