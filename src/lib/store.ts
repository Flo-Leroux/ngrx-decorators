import { storageMetadata } from './storageMetadata';

export function Store(args: Object) {
  return (target: Function) => {

    const meta = storageMetadata(target);

    meta.initialState = args;
  };
}
