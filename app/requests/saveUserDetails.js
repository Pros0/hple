import fetcher from '../utils/fetcher';
import { getGatewayUsers } from '../utils/gateways';

const login = ({ body, onComplete, onError, onFinally }) =>
  fetcher(`${getGatewayUsers()}/${body.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
    .then((resp) => {
      if (resp.error) {
        if (onError)
          onError(
            resp.error?.details?.[0]
              ? { error: resp?.error?.details?.[0] }
              : resp,
          );
      } else if (onComplete) {
        onComplete(resp);
      }
    })
    .catch((error) => {
      if (onError) onError(error?.details?.[0] || error);
    })
    .finally(() => {
      if (onFinally) onFinally();
    });

export default login;
