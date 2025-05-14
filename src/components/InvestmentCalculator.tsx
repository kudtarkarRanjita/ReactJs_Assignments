import Header from "./Header";
import UserInput from "./UserInput";
import Results from "./Results";
import { useState } from "react";

interface UserInputProps {
  inputIndentifier: string;
  newValue: number;
}
function InvestmentCalculator() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1000,
    expectedReturn: 5,
    duration: 5,
  });
  function handleChange(UserInputProps: UserInputProps) {
    const { inputIndentifier, newValue } = UserInputProps;
    setUserInput((prevState) => ({
      ...prevState,
      [inputIndentifier]: +newValue,
    }));
  }
  return (
    <>
      <Header />
      <UserInput userInput={userInput} handleChange={handleChange} />
      <Results input={userInput} />
    </>
  );
}

export default InvestmentCalculator;
