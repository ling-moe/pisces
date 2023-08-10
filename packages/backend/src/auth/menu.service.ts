import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';

@Injectable()
export class MenuService {
  menu(user: User) {
    // ! 先写死菜单，后面药根据用户返回
    return {
      "menu": [
        {
          "route": "iam/user/list",
          "name": "dashboard",
          "type": "link",
          "icon": "dashboard",
          "badge": {
            "color": "red-500",
            "value": "5"
          }
        },
        {
          "route": "/",
          "name": "sessions",
          "type": "sub",
          "icon": "question_answer",
          "children": [
            {
              "route": "403",
              "name": "403",
              "type": "link"
            },
            {
              "route": "404",
              "name": "404",
              "type": "link"
            },
            {
              "route": "500",
              "name": "500",
              "type": "link"
            }
          ]
        }
      ]
    }
  }
}
