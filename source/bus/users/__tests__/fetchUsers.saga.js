
import { apply, put } from "redux-saga/effects";
import { cloneableGenerator } from "redux-saga/utils";
import { fetchUsers } from "../saga/workers";
import { uiActions } from "../../ui/actions";
import { usersActions } from "../../users/actions";
import { api } from "../../../REST";

const saga = cloneableGenerator(fetchUsers)();

let clone = null;

describe("fetchUsers saga:", () => {
  describe("before checking status:", () => {
    test('should dispatch "startFetching" action', () => {
      expect(saga.next().value).toEqual(put(uiActions.startFetching()));
    });

    test("should call api.users.fetch", () => {
      expect(saga.next().value).toEqual(apply(api, api.users.fetch));
      clone = saga.clone();
    });
  });

  describe("status 400:", () => {
    test("should convert response into JSON", () => {
      expect(clone.next(__.fetchResponseFail400).value).toEqual(
        apply(__.fetchResponseFail400, __.fetchResponseFail400.json)
      );
    });

    test("should emit error", () => {
      expect(clone.next(__.responseDataFail).value).toEqual(
        put(uiActions.emitError(__.error, "fetchUsers saga"))
      );
    });

    test('should dispatch "stopFetching" action', () => {
      expect(clone.next().value).toEqual(put(uiActions.stopFetching()));
    });

    test("should finish", () => {
      expect(clone.next().done).toBe(true);
    });
  });

  describe("status 200:", () => {
    test("should convert response into JSON", () => {
      expect(saga.next(__.fetchResponseSuccess).value).toEqual(
        apply(__.fetchResponseSuccess, __.fetchResponseSuccess.json)
      );
    });

    test('should dispatch "fillUsers" action', () => {
      expect(saga.next(__.responseDataSuccess).value).toEqual(
        put(usersActions.fillUsers(__.responseDataSuccess.data))
      );
    });

    test('should dispatch "stopFetching" action', () => {
      expect(saga.next().value).toMatchInlineSnapshot(`
Object {
  "@@redux-saga/IO": true,
  "PUT": Object {
    "action": Object {
      "type": "STOP_FETCHING",
    },
    "channel": null,
  },
}
`);
    });

    test("should finish", () => {
      expect(saga.next().done).toBe(true);
    });
  });
});
