import { createSelector, MemoizedSelector, createFeatureSelector } from '@ngrx/store';

export function storageMetadata(target: Function | Object, featureName: string = null) {

    let targetBase = null;
    switch (typeof target) {
        case 'function':
            targetBase = (target as Function);
            break;
        case 'object':
        targetBase = (target as Object).constructor;
            break;
    }

    if (targetBase.prototype === null || targetBase.prototype === undefined) {
        throw new Error('Targetor is null or undefined');
    }

    if (!targetBase.prototype.hasOwnProperty('metaState')) {
        const initMetaState = { actions: {}, effects: {} };
        targetBase.prototype['metaState'] = initMetaState;
    }

    if (featureName === null) {
        featureName = targetBase.name;
    }

    targetBase.prototype.featureName = featureName;
    targetBase.prototype.selectState = createFeatureSelector<any>(
        targetBase.name,
    );

    return targetBase.prototype['metaState'];
}
