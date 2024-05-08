import ExpenseItem from "./ExpenseItem";

const Table = ({ expenses, showBudget = true }) => {
  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            {[
              "Name",
              "Amount",
              "Created At",
              showBudget ? "Budget" : "",
              "",
            ].map((i, index) => (
              <th key={index}>{i}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {expenses
            .sort((a, b) => b.createdAt - a.createdAt)
            .map((expense) => (
              <tr key={expense.id}>
                {<ExpenseItem expense={expense} showBudget={showBudget} />}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
