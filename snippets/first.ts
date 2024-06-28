import type { Equal, Expect } from './utils'

type cases = [
  Expect<Equal<First<[3, 2, 1]>, 3>>,
  Expect<Equal<First<[() => 123, { a: string }]>, () => 123>>,
  Expect<Equal<First<[]>, never>>,
  Expect<Equal<First<[undefined]>, undefined>>,
]

type errors = [
  // @ts-expect-error
  First<'notArray'>,
  // @ts-expect-error
  First<{ 0: 'arrayLike' }>,
]


// type First<T extends any[]> = T['length'] extends 0 ? never : T[0]
type First<T extends any[]> = T extends [infer First, ...infer rest] ? First : never

const [a,b,c] = [1,2,3]


// function first(t) {
//   if(Array.isArray(t) && t.length > 0) {
//     return t[0]
//   } else {
//     return 'never'
//   }
// }