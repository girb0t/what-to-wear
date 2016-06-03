export const FETCH_DEVICE_LOCATION = 'FETCH_DEVICE_LOCATION';

export function fetchDeviceLocation() {
  return {
    type: FETCH_DEVICE_LOCATION,
    payload: { zipCode: '02144' }
  };
}
