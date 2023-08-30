
import { MusubiModule } from "@pisces/musubi/server";
import { UserRepository } from "./repository/user.repository";
import { RoleRepository } from "./repository/role.repository";
import { MenuRepository } from "./repository/menu.repository";

@MusubiModule({
  remotes: [
    UserRepository,
    RoleRepository,
    MenuRepository,
  ]
})
export class IamBackendModule {}
