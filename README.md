# `@lucid-softworks/iterable-find`

Find the first iterable value matching a predicate.

```ts
import { find } from "@lucid-softworks/iterable-find";

find(new Set([1, 2, 3]), (value) => value > 1); // 2
```

See the exported types and tests for exact edge-case behavior.
