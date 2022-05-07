# ts-playground

## 0 准备

```bash
# 安装TypeScript的命令行工具
npm install -g typescript

# 编译一个ts文件
tsc filename.ts
# 在报错的时候终止 js 文件的生成，可以在 tsconfig.json 中配置 noEmitOnError。(目前测试还是能生成的，原因未知。)
{
    "compilerOptions": {
        "noEmitOnError": true // 编译的源文件中存在错误的时候不再输出编译结果文件
    }
}
# 通过命令行控制在报错时终止js文件的生成。(测试可以)
tsc --noEmitOnError filename.ts
```

## 一、基础

### 1.原始数据类型

#### 1.1 布尔值 `boolean`

注1:构造函数 `Boolean` 创造的对象**不是**布尔值

#### 1.2 数值 `number`

#### 1.3 字符串 `string`

#### 1.4 空值 `void`

声明一个 `void` 类型的变量没有什么用，因为你只能将它赋值为 `undefined` 和 `null` (只在 --strictNullChecks 未指定时)：

```tsx
let unusable: void = undefined;
```

