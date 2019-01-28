
import { storageMetadata } from './storageMetadata';
import { NgrxConnector } from './ngrxConnector';

const createDispatcher = function(obj: any) {
    const store = NgrxConnector.store;
    if (!store) {
        throw new Error('NgrxSelect not connected to store!');
    }
    return store.dispatch(obj);
};

interface IActionOpts {
  isRequest: boolean;
}

const OptsDefault: IActionOpts = {
  isRequest: false
};

// const createRequestor = function() {
// };

export function Action(type: string, featureName = null, opts: IActionOpts = OptsDefault) {
    return (target: Object, methodKey: string, descriptor: TypedPropertyDescriptor<any>) => {

        const originalMethod = descriptor.value;

        const meta = storageMetadata(target, featureName);

        const newFn = function () {
            return originalMethod.apply(target, arguments);
        };

        meta.actions[methodKey] = {
            type: type,
            fn: newFn
        };

        descriptor.value = function (payload: any): boolean {
            createDispatcher({
                type: type,
                payload: payload
            });

            return true;
        };

        return descriptor;
    };
}
