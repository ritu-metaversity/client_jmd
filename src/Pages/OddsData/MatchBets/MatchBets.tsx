const MatchBets = () => {
  return (
    <>
      <table
        width="100%"
        border={0}
        cellPadding={2}
        cellSpacing={2}
        id="MyBets"
        className="table-new"
      >
        <tbody>
          <tr>
            <td className="FontTextWhite10px">Sr.</td>
            <td className="FontTextWhite10px">Rate</td>
            <td className="FontTextWhite10px">Amount</td>
            <td className="FontTextWhite10px">Mode</td>
            <td className="FontTextWhite10px">Team</td>
          </tr>
          <tr className="ng-star-inserted">
            <td>1</td>
            <td className="ng-star-inserted">13.00</td>
            <td>100</td>
            <td>L</td>
            <td>Pakistan</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default MatchBets
