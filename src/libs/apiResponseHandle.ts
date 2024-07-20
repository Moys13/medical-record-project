import moment from "moment";

export default function ApiResponseHandle(
  statusCode: number,
  data?: any,
  message?: string,
) {
  return {
    statusCode: statusCode,
    message: message,
    timeStamp: moment().toISOString(),
    data: data,
  };
}

