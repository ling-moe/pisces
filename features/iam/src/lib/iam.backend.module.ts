
import { MusubiModule } from "@pisces/musubi/server";
import { UserRepository } from "./repository/user.repository";
import { RoleRepository } from "./repository/role.repository";
import { MenuRepository } from "./repository/menu.repository";
import { AuthModule } from "./infra/auth/auth.module";

@MusubiModule({
  remotes: [
    UserRepository,
    RoleRepository,
    MenuRepository,
  ],
  imports: [AuthModule]
})
export class IamBackendModule {}
