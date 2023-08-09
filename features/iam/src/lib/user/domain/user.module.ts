import { UserRepository } from './repository/user.repository';
import { MusubiModule } from "@pisces/musubi/server";

@MusubiModule({
  remotes: [UserRepository]
})
export class UserModule {}
