export const Increment = (payload: number) => ({
  type: "INCREMENT",
  payload: payload,
});

export const Decrement = (payload: number) => ({
  type: "DECREMENT",
  payload: payload,
});
