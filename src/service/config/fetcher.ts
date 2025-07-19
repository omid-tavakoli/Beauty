import { headerOption, gatewayUrl, headers } from "./variables";

export const getFetcher = async (
  path: string,
  config: RequestInit = {},
  url: string = gatewayUrl ?? ""
) => {  
  try {
    return await (
      await fetch(`${url}${path}`, {
        method: "GET",
        headers: headerOption,
        ...config,
      })
    ).json();
  } catch (error) {
    return undefined;
  }
};

export const postFetcher = async (
  path: string,
  params = {},
  config = {},
  url: string = gatewayUrl ?? ""
) =>
  await (
    await fetch(`${url}${path}`, {
      method: "POST",
      body: JSON.stringify(params),
      headers,
      ...config,
    })
  ).json();

export const putFetcher = async (
  path: string,
  params = {},
  config = {},
  url: string = gatewayUrl ?? ""
) =>
  await (
    await fetch(`${url}${path}`, {
      method: "PUT",
      body: JSON.stringify(params),
      headers: headers,
      ...config,
    })
  ).json();

// export const putFetcher = async (
//   path: string,
//   params = {},
//   config = {},
//   url: string = gatewayUrl ?? ''
// ) =>
//   await (
//     await fetch`(${url}/${path}`, {
//       method: 'PUT',
//       body: JSON.stringify(params),
//       headers: headerOption,
//       ...config,
//     })
//   ).json();

// export const uploadFetcher = async (
//   path: string,
//   params: BodyInit,
//   config = {},
//   url: string = gatewayUrl ?? ''
// ) => {

//     await fetch`(${url}/${path}`, {
//       method: 'POST',
//       body: params,
//       headers: headerOption,
//       ...config,
//     }.json();
// };

// export const deleteFetcher = async (
//   path: string,
//   config = {},
//   url: string = gatewayUrl ?? ''
// ) =>
//   await (
//     await fetch`(${url}/${path}`, {
//       method: 'DELETE',
//       headers: headerOption,
//       ...config,
//     })
//   ).json();
