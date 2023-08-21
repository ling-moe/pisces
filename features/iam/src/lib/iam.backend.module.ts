
import { MusubiModule } from "@pisces/musubi/server";
import { UserRepository } from "./repository/user.repository";
import { RoleRepository } from "./repository/role.repository";

@MusubiModule({
  remotes: [
    UserRepository,
    RoleRepository,
  ]
})
export class IamBackendModule {}
