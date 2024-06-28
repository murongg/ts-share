---
layout: cover
title: TypeScript type gymnastics
# apply any unocss classes to the current slide
class: text-center
transition: slide-left
mdc: true
hideInToc: true
---

# TypeScript 类型体操

(TypeScript 类型编程)

---
layout: image-right
image: https://cover.sli.dev
hideInToc: true
---

# Toc
<Toc />

---
layout: image-right
image: /images/ts-logo-256.svg
backgroundSize: contain
---

# 什么是类型体操

<br />

TypeScript 是一种 **支持类型编程** 的类型系统。这不仅意味着我们可以使用基本的类型，还可以对传入的类型参数（泛型）进行各种逻辑运算，从而生成新的类型，这就是类型编程。***由于其相对较高的难度，大家戏称其为 TypeScript 类型体操***。通过类型编程，我们可以在复杂场景下获取精确的类型，从而避免在遇到困难时使用 `any` 类型。

<style>
p {
  line-height: 2.5rem;
}
</style>

---
layout: default
---


# Variables / Constants
<div class="grid grid-cols-2 gap-x-4 gap-y-1">

<v-clicks :every='2'>

- JavaScript

```ts
let a = 1;
const b = '2';
var c = 'c'
```

- TypeScript Type

```ts
type A = number
type B = '2'

```

- Variables

```ts {monaco}  
type A = number | string // 一种或多种类型
let a1: A = 1
let a2: A = 2
let a3: A = '3' 
```

- Constants

```ts {monaco}  
type B = '2' // 具体的值
let b1: B = '2'
let b2: B = '3'
```

</v-clicks>
</div>

<v-click> 

## Reference

- https://www.TypeScriptlang.org/docs/handbook/2/everyday-types.html
</v-click>



<style>
.slidev-vclick-target {
  transition: opacity 500ms ease !important;
}

.slidev-vclick-hidden {
  opacity: 0;
  pointer-events: none;
}

</style>

---
layout: default
---
# If Else
<div class="grid grid-cols-2 gap-x-4 gap-y-2 mb-20">

<v-clicks :every='2'>

- JavaScript

```ts
if(true) {
  // ...
} else {
  // ...
}

const truth = true ? 1 : '2';
```

- TypeScript Type

```ts {monaco}  
type A = number
type B = string
type C = A extends B ? true : false // 仅支持三元表达式
```

</v-clicks>
</div>

<v-click> 

### Reference

- https://www.TypeScriptlang.org/docs/handbook/2/conditional-types.html

</v-click> 

---
layout: default
---

# Loop

<div class="grid grid-cols-2 gap-x-2 gap-y-2">

<v-clicks :every='2'>

- JavaScript

```ts {monaco-run} {width: '300px'}
for(let i = 0; i < 10; i++) {} // 普通的for循环
for(const item of [1, 2, 3]) {} // for of 循环
for(const key in {a: 1, b: 2}) {} // for in 循环
```

- TypeScript Type <span v-mark="{ at: 2, color: 'orange', type: 'underline' }">
(Object)
</span>

```ts {monaco} {width: '300px'}
type A = {
  a: number
  b: string
  c: boolean
}
type ALoop = A[keyof A] // A['a'] | A['b'] | A['c'] 
type AMap = {
  [Key in keyof A]: A[Key]
} // for(const key in {a: 1, b: 2}) {}
```

- TypeScript Type <span v-mark="{ at: 3, color: 'orange', type: 'underline' }">
(Array)
</span>

```ts {monaco} {width: '300px'}
type B = [number, string, boolean]
type BLoop1 = B extends Array<infer T> ? T : never
type BLoop2 = unknown extends Array<infer T> ? T : never
type Bloop3 = B[keyof B] // B[0] | B[1] | B[2] | property
type Bloop4 = B[number] // B[0] | B[1] | B[2]
```

</v-clicks>
</div>
<v-click> 

## Reference

- https://www.TypeScriptlang.org/docs/handbook/2/keyof-types.html

</v-click> 

---
layout: default
---

# extends / infer

<div class="grid grid-cols-2 gap-x-4 gap-y-2">

<v-clicks :every='2'>

- `extends` 相当于 js 中的 `===`。

```ts {monaco-run}
// type
type A = true extends false ? true : false
// js
const a = 1
const b = 1
console.log(a === b)
```

- `infer` 关键词作用是可以完成类型的推导，  
  <span v-mark="{ at: 3, color: 'orange', type: 'underline' }">它只能用于 extends 右侧</span>。

```ts {monaco-run}
// type
type A = [number, string] extends [infer a, string] ? a : never
// js
const [a] = ['abc', '123']
console.log(`a: ${a}`)
```
</v-clicks>
</div>


---
layout: default
---

# Challenge 1 - If

<<< ./snippets/if.ts {monaco-write} {height:'400px'}


---
layout: default
---

# Challenge 2 - First of Array

<<< ./snippets/first.ts {monaco-write} {height:'400px'}


---
layout: default
---

# Challenge 3 - Push

<<< ./snippets/push.ts {monaco-write} {height:'400px'}


---
layout: default
---

# Challenge 4 - Readonly

<<< ./snippets/readonly.ts {monaco-write} {height:'400px'}

---
layout: default
---

# Challenge 5 - Readonly2

<<< ./snippets/readonly2.ts {monaco-write} {height:'400px'}


---
layout: default
---

# Challenge 6 - Includes

<<< ./snippets/includes.ts {monaco-write} {height:'400px', autorun: true}
