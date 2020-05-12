import { uiActions } from "../actions";
import { uiReducer } from "../reducer";

describe("ui reducer:", () => {
  test("defaults to initial state", () => {
    const res = uiReducer(void 0, {});
    expect(res).toMatchInlineSnapshot(`
Immutable.Map {
  "isFetching": false,
  "isOnline": false,
}
`);
  });

  test("handles SET_OFFLINE_STATE", () => {
    const res = uiReducer(void 0, uiActions.setOfflineState());
    expect(res).toMatchInlineSnapshot(`
Immutable.Map {
  "isFetching": false,
  "isOnline": false,
}
`);
  });

  test("handles SET_ONLINE_STATE", () => {
    const res = uiReducer(void 0, uiActions.setOnlineState());
    expect(res).toMatchInlineSnapshot(`
Immutable.Map {
  "isFetching": false,
  "isOnline": true,
}
`);
  });

  test("handles START_FETCHING", () => {
    const res = uiReducer(void 0, uiActions.startFetching());
    expect(res).toMatchInlineSnapshot(`
Immutable.Map {
  "isFetching": true,
  "isOnline": false,
}
`);
  });

  test("handles STOP_FETCHING", () => {
    const res = uiReducer(void 0, uiActions.stopFetching());
    expect(res).toMatchInlineSnapshot(`
Immutable.Map {
  "isFetching": false,
  "isOnline": false,
}
`);
  });
});
