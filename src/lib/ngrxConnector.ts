
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

@Injectable()
export class NgrxConnector {
    static store: Store<any> | undefined = undefined;
    connect(store: Store<any>) {
        NgrxConnector.store = store;
    }
}
