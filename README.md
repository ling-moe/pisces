# Pisces

这是一个TS全栈框架，用于快速交付和开发应用。

[Feature看板](https://github.com/orgs/ling-moe/projects/1)

## 内容列表

- [背景](#背景)
- [Feature列表](#Feature列表)
- [安装](#安装)
- [如何贡献](#如何贡献)

## 背景

我认为未来的全栈开发一定是统一语言的，而这个语言目前最好的载体就是TS（Kotlin也是一个方向，如果有机会我会制作另外一个项目说明这一点）。

本项目采用的技术栈为Angular+Nx+Prisma+Nestjs+ng-matero（后面会将详细版本放出来）。

## Feature列表

[-] RBAC权限控制

[ ] 字典

[ ] 代码生成

[ ] 国际化

[ ] LDAP集成

[ ] Oauth2集成

[ ] 多租户展开

## 安装

这个项目使用 [node](http://nodejs.org/) 和 [npm](https://npmjs.com/)。请确保你本地安装了它们。

```shell
npm i
```

## 如何贡献

非常欢迎你的加入！[提一个 Issue](https://github.com/RichardLitt/standard-readme/issues/new) 或者提交一个 Pull Request。

标准 Readme 遵循 [Contributor Covenant](http://contributor-covenant.org/version/1/3/0/) 行为规范。

- https://twitter.com/nxdevtools

docker run --name redis -p 6379:6379 -d redis --requirepass "KZMdBNea7Q1bXFVUBQr8Z9XZrlsuK820"

docker run --name postgres -p 5432:5432 -e POSTGRES_PASSWORD=VR7HUOH7ZOSRe5LSPHo706e1UwsitBnA -e POSTGRES_USER=root -e POSTGRES_DB=pisces -d postgres

凡是使用async的地方必须要用await调用,不然异常会拦截不到
