
import { uiActions } from '../actions';

describe('ui actions:', () => {
    test('emitError', () => {
        expect(uiActions.emitError(__.error, __.userProfile)).toMatchSnapshot();
    });

    test('setOfflineState', () => {
        expect(uiActions.setOfflineState()).toMatchSnapshot();
    });

    test('setOnlineState', () => {
        expect(uiActions.setOnlineState()).toMatchSnapshot();
    });

    test('startFetching', () => {
        expect(uiActions.startFetching()).toMatchSnapshot();
    });

    test('stopFetching', () => {
        expect(uiActions.stopFetching()).toMatchSnapshot();
    });
});
