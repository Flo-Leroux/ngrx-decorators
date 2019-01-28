import { storageMetadata } from './storageMetadata';

export function Reducer() {
    return (target: Object, methodKey: string, descriptor: TypedPropertyDescriptor<any>) => {

        const originalMethod = descriptor.value;

        const meta = storageMetadata(target);

        const newFn = function(state: any, action: any) {
            if (state === undefined) {
                state = this.metaState.initialState;
            }
            const actionsKeys = Object.keys(this.metaState.actions);

            if (actionsKeys.length > 0) {
                const actionsFilters = actionsKeys
                    .filter((key: string) => this.metaState.actions[key].type === action.type);

                if (actionsFilters.length > 0) {
                    return {
                        ...state,
                        ...(this.metaState.actions[actionsFilters[0]]).fn(action.payload)
                    };
                }
            }

            return state;
        };

        descriptor.value = newFn;

        return descriptor;
    };
}

