type State = { count: number };

const initialState: State = {
  count: 0,
};

interface ActionPayloadType {
  type: string;
  payload: number;
}

export const counterReducer = (
  state: State = initialState,
  action: ActionPayloadType
) => {
  const { type, payload } = action;
  switch (type) {
    case "INCREMENT":
      return { ...state, count: state.count + payload };
    case "DECREMENT":
      return { ...state, count: state.count - payload };
    default:
      return state;
  }
};
