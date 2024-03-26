export const getLastKeyValue = (payload) => {
    const filteredPayload = Object.fromEntries(
      Object.entries(payload).filter(([key, value]) => value)
    );
    const lastKey = Object.keys(filteredPayload).pop();
    const lastValue = filteredPayload[lastKey];
    return { [lastKey]: lastValue };
};