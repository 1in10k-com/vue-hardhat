步骤：  
vue create vue-hardhat  
yarn install  
yarn add vue-router(遇到此提示，不知是否会有问题：warning " > vue-router@4.0.12" has incorrect peer dependency "vue@^3.0.0".)  
npx hardhat (会替换掉之前的 readme 和 gitignore，不过这里重新找了回来，并将替换前后的文件合并了)

---

遇到问题查出是 vue-router 版本问题，可能此版本不支持 vue2。yarn remove vue-router。再在 package.json 中添加"vue-router": "^3.3.2"。再 yarn 安装

---

再次卸载 vue-router，并用 npm install --legacy-peer-deps vue-router@3.5.2 -D 重装

# vue-hardhat

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Lints and fixes files

```
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

# Basic Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts.

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/sample-script.js
npx hardhat help
```
