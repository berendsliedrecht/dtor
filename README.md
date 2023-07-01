# TypeScript Deconstructor

Requires TypeScript 0.5.2-beta or newer

## Example tsconfig.json

```json
{
    "compilerOptions": {
        "lib": ["esnext", "dom"],
        "target": "es2015",
        "module": "commonjs",
        "esModuleInterop": true,
        "forceConsistentCasingInFileNames": true,
        "strict": true,
        "outDir": "build",
        "emitDecoratorMetadata": true,
        "experimentalDecorators": true,
        "declaration": true
    }
}
```

## Example using with async deconstructors

```typescript
import type { AsyncDeconstructable } from 'dtor'
import { Deconstructor } from "dtor";

class SomeExample {
    public constructor() {
        console.log("constructed");
    }

    @Deconstructor()
    public async asyncDeconstructor() {
        await new Promise((r) => setTimeout(r, 2000));
        console.log("deconstructed");
    }
}

void (async () => {
  await using cls = new SomeExample() as AsyncDeconstructable<SomeExample>;
})()

```

## Example using with sync deconstructors

```typescript
import type { Deconstructable } from 'dtor'
import { Deconstructor } from "dtor";

class SomeExample {
    public constructor() {
        console.log("constructed");
    }

    @Deconstructor()
    public deconstructor() {
        console.log("deconstructed");
    }
}

using cls = new SomeExample() as Deconstructable<SomeExample>;
```
