
import { IGlobalState } from '../contract/BaseModel/IGlobalState';
import store from './configureStore';


export type { IGlobalState };

export default abstract class GlobalStore {
    static InitializeGlobalStore() {
        this.store = '';
    }

    private static _store: any;

    public static get store(): any {
        return this._store;
    }

    public static set store(v: any) {
        this._store = store;
    }
}
