type Route = `/${string}`;

// any string that starts with "/" is allowed
export const goToRoute = (route: Route) => {};

const test = "anyThing";
const test2: Route = "/anyThing";

// Should succeed:
goToRoute(`/${test}`);
goToRoute(test2);
goToRoute("/");
goToRoute("/admin/users");

// Should error:
// @ts-expect-error
goToRoute("users/1");
// @ts-expect-error
goToRoute("http://facebook.com");
