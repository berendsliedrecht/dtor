import "disposablestack/auto";

export function Deconstructor() {
  return function (target: Object, key: string) {
    // @ts-ignore
    if(target[key].constructor.name === "AsyncFunction") {
      //@ts-ignore
      target[Symbol.asyncDispose] = target[key];
    } else {
      //@ts-ignore
      target[Symbol.dispose] = target[key];
    }
  };
}

export type Deconstructable<T> = T & {[Symbol.dispose]: () => void}
export type AsyncDeconstructable<T> = T & {[Symbol.asyncDispose]: () => Promise<void>}

