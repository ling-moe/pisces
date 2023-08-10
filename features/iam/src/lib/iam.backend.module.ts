
import { MusubiModule } from "@pisces/musubi/server";
import { UserRepository } from "./repository/user.repository";
import { Module } from "@nestjs/common";

@MusubiModule({
  remotes: [UserRepository]
})
class UserModule{

}

@Module({
  imports: [UserModule]
})
export class IamBackendModule {}
