import { calculateInvestmentResults, formatter } from "../util/investment";
type UserInputProps = {
  input: {
    initialInvestment: number;
    annualInvestment: number;
    expectedReturn: number;
    duration: number;
  };
};

type investmentResult = {
  year: number;
  interest: number;
  valueEndOfYear: number;
  annualInvestment: number;
};
function Results({ input }: UserInputProps) {
  const resultData: investmentResult[] = calculateInvestmentResults(input);

  const initialInvestment = input.initialInvestment;
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {resultData.map((item) => {
          const totalInterest =
            item.valueEndOfYear -
            item.annualInvestment * item.year -
            initialInvestment;

          return (
            <tr key={item.year}>
              <td>{item.year}</td>
              <td>{formatter.format(item.valueEndOfYear)}</td>
              <td>{formatter.format(item.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(item.valueEndOfYear - totalInterest)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Results;
