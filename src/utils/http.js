import axios from "axios";

const localBackend = axios.create({
  baseURL: `${process.env.REACT_APP_BACK_URL}/api/`,
  timeout: 1000,
});
const httpMethod = ["get", "post", "put", "delete"];

const getUrl = ({url, version}) => {
  if (!url) throw new Error("Invalid Url");

  return `/v${version}${url.startsWith("/") ? url : `/${url}`}`;
};

const defaultOnSuccess = (response) => {
  console.log(response);
};

const defaultOnError = (error) => {
  console.error(error);
};

const request = ({
  url,
  version = 1,
  method = "get",
  data,
  onSuccess,
  onError,
}) => {
  if (!httpMethod.includes(method))
    throw new Error("only get, post, put, delete");

  onSuccess = onSuccess || defaultOnSuccess;
  onError = onError || defaultOnError;

  return localBackend({
    method,
    data,
    url: getUrl({url, version}),
  });

  // axios[method](getUrl({url, version}), data)
  //   .then((response) => {
  //     onSuccess(response);
  //   })
  //   .reject((error) => onError(error));
};

export default {
  request,
};
