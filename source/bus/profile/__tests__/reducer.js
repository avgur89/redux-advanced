import { profileActions } from "../actions";
import { profileReducer } from "../reducer";

describe("profile reducer:", () => {
  test("defaults to initial state", () => {
    const res = profileReducer(void 0, {});
    expect(res).toMatchInlineSnapshot(`
Immutable.Map {
  "avatar": "",
  "firstName": "",
  "id": "",
  "lastName": "",
  "token": "",
}
`);
  });

  test("handles CLEAR_PROFILE action", () => {
    const res = profileReducer(void 0, profileActions.clearProfile());
    expect(res).toMatchInlineSnapshot(`Immutable.Map {}`);
  });

  test("handles FILL_PROFILE action", () => {
    const res = profileReducer(
      void 0,
      profileActions.fillProfile(__.userProfile)
    );
    expect(res).toMatchInlineSnapshot(`
Immutable.Map {
  "avatar": "TEST_AVATAR",
  "firstName": "Walter",
  "id": "TEST_ID",
  "lastName": "White",
  "token": "TEST_TOKEN",
}
`);
  });

  test("handles UPDATE_AVATAR action", () => {
    const res = profileReducer(void 0, profileActions.updateAvatar(__.url));
    expect(res).toMatchInlineSnapshot(`
Immutable.Map {
  "avatar": "https://www.url.com",
  "firstName": "",
  "id": "",
  "lastName": "",
  "token": "",
}
`);
  });
});
