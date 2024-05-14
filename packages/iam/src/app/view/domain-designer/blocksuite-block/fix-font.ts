import { EdgelessRootService, PageRootService } from "@blocksuite/blocks";

export class CustomDocPageService extends PageRootService {
  override loadFonts() {
    // empty
  }
}

export class CustomEdgelessPageService extends EdgelessRootService {
  override loadFonts() {
    //enpty
  }
}
