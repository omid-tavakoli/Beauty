export const allDefaultHeader = (name: string, value: string) => {
  if (typeof window !== "undefined") {
    var originalFetch = window.fetch;
    window.fetch = function (input, init) {
      if (!init) {
        init = {};
      }
      if (!init.headers) {
        init.headers = new Headers();
      }
      if (init.headers instanceof Headers) {
        init.headers.append(name, value);
      } else if (init.headers instanceof Array) {
        init.headers.push([name, value]);
      } else {
        init.headers[name] = value;
      }
      return originalFetch(input, init);
    };
  }
};
