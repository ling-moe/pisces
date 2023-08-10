
import { MusubiModule } from "@pisces/musubi/server";
import { UserRepository } from "./repository/user.repository";

@MusubiModule({
  remotes: [UserRepository]
})
export class IamBackendModule {}
