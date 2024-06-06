import React from 'react'

const SessionBet = () => {
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
            <td className="FontTextWhite10px">Session</td>
            <td className="FontTextWhite10px">Rate</td>
            <td className="FontTextWhite10px">Amount</td>
            <td className="FontTextWhite10px">Run</td>
            <td className="FontTextWhite10px">Mode</td>
            <td className="FontTextWhite10px">Dec</td>
          </tr>
          <tr className="ng-star-inserted">
            {/* <td>1</td>
            <td className="ng-star-inserted">13.00</td>
            <td>100</td>
            <td>L</td>
            <td>Pakistan</td> */}
            <td colSpan={7}>No Record Founds !</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default SessionBet