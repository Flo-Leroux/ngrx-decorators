import { storageMetadata } from './storageMetadata';
import { NgrxConnector } from './ngrxConnector';
import { createSelector } from '@ngrx/store';

const createSelect = function(fn) {
    const store = NgrxConnector.store;
    if (!store) {
        throw new Error('NgrxSelect not connected to store!');
    }
    return store.select(fn);
};

export function Select(selectFn: any) {
    return (target: Object, propertyKey: string) => {
        const meta = storageMetadata(target);

        const getter = function() {
            const fn = createSelector(
                target.constructor.prototype.selectState,
                selectFn
            );
            return createSelect(fn);
        };

        const setter = function(value) {
            throw new Error(`Can not set ${value} for ${propertyKey}.`);
        }

        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter
        });
    };
}
