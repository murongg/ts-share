import type { Equal, Expect } from './utils'

type cases = [
  Expect<Equal<If<true, 'a', 'b'>, 'a'>>,
  Expect<Equal<If<false, 'a', 2>, 2>>,
  Expect<Equal<If<boolean, 'a', 2>, 'a' | 2>>,
]

type error = If<null, 'a', 'b'>

type If<C, T, F> = C extends true ? T : F

// function if(c, t, f) {
//   return c ? t : f
// }