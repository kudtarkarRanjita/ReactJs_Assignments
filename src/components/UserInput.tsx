type UserInputProps = {
  handleChange: (input: { inputIndentifier: string; newValue: number }) => void;
  userInput: {
    initialInvestment: number;
    annualInvestment: number;
    expectedReturn: number;
    duration: number;
  };
};
function UserInput({ handleChange, userInput }: UserInputProps) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            required
            onChange={(event) =>
              handleChange({
                inputIndentifier: "initialInvestment",
                newValue: Number(event.target.value),
              })
            }
            value={userInput.initialInvestment}
          ></input>
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            required
            onChange={(event) =>
              handleChange({
                inputIndentifier: "annualInvestment",
                newValue: Number(event.target.value),
              })
            }
            value={userInput.annualInvestment}
          ></input>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            required
            onChange={(event) =>
              handleChange({
                inputIndentifier: "expectedReturn",
                newValue: Number(event.target.value),
              })
            }
            value={userInput.expectedReturn}
          ></input>
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            required
            onChange={(event) =>
              handleChange({
                inputIndentifier: "duration",
                newValue: Number(event.target.value),
              })
            }
            value={userInput.duration}
          ></input>
        </p>
      </div>
    </section>
  );
}

export default UserInput;
