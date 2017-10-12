const API_CALL = 'https://shift-api.k8s-staging.itpservices.be/v1/schedule';

export default function () {
  return fetch(API_CALL).then(response => response.json());
}
