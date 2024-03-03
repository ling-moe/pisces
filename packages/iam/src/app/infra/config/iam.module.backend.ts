import { MusubiModule } from '@pisces/musubi/server';
import { UserRepository } from "../../repository/user.repository";
import { RoleRepository } from "../../repository/role.repository";
import { MenuRepository } from "../../repository/menu.repository";
import { AuthController } from "../../controller/auth.controller";
import { CacheModule } from "@pisces/backend";
import { ProductRepository } from "../../repository/product.repository";

@MusubiModule({
  imports: [
    CacheModule
  ],
  remotes: [
    UserRepository,
    RoleRepository,
    MenuRepository,
    ProductRepository,
  ],
  controllers: [
    AuthController
  ]
})
export class IamModuleBackend {}
