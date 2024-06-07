import { Link } from "react-router-dom"
import "./TermsConditions.scss"
import Footer from "../../Common/Footer/Footer"
import WelcomeDialog from "../../Component/Welcome/WelcomeDialog"

const TermsConditions = () => {
  const terms:string[] = [
    "Change your password after login.",
    "If the game is canceled or tied, all the deals of the match will be considered canceled and the Coins will be more or less according to the session that has been completed.",
    "During the match Deal only by seeing and understanding. Any transaction entered into will not be deleted or replaced. You will be responsible for all transactions.",
    "Match or Session Quote Wrong Any matches or sessions that have been traded on the go will be automatically deleted.",
    "Coins will be more or less according to the session which will be completed in the match and all the sessions will be canceled according to the session which is not completed.",
    "Match I Over Come having But advance session fancy will get canceled.",
    "Overs less in the match having But if the same team comes to play again, the player's runs and partnership in that running will be declared. if over less If the other team comes to play, then the player runs in the running, the partnership will be canceled",
    "If the batsman is injured, he scores 34 runs as a result of which 34 runs are awarded.",
    "innings in test On being declared, the over or ball count of the other team will be done to declare the session which is in running.",
    "The decision of the company to declare and cancel the session will be final. In such a situation, any kind of debate will not be valid.",
    "It is an offense for anyone under the age of 18 to open an account or gamble on jmdsports11.com. Play at your own risk",
    "Four, sixes, wide, wicket, extra run, total run, highest over and top batsman, maiden over, caught-out, no-ball, run-out, fifty and century are valid only if the match has been completed. In case due to rain over has been reduced, all other fancy will be deleted.",
  ]
  return (
    <>
      <div className="termandconditions">
        <div className="wrap">
          <div className="content_top">
            <div className="content_top-grid3" />
            <div className="clear" />
          </div>
          <br />
          <Link to="/" style={{ color: "#FFFFFF" }}>
            <div className="skills">
              <div className="text-center">
                <h4
                  style={{
                    color: "#FFF",
                    fontFamily: "Verdana, Geneva, sans-serif",
                    fontSize: 18,
                    fontWeight: "bold",
                  }}
                >
                  Continue
                </h4>
              </div>
            </div>
          </Link>
          <h4 className="heading-col">Terms &amp; Conditions </h4>
          <div className="drag_drop">
            {terms?.map((item: string, id: number) => (
              <h4
                style={{
                  color: "#000",
                  fontFamily: "Verdana, Geneva, sans-serif",
                  fontSize: 12,
                }}
              >
                {id + 1}. {item}
              </h4>
            ))}
            <h4
              style={{
                color: "#000",
                fontFamily: "Verdana, Geneva, sans-serif",
                fontSize: 12,
              }}
            >
              Note: Transactions made will be valid only in case of any failure
              or closure of the server or website. In such a case, any dispute
              will not be valid.
            </h4>
          </div>
          <br />
          <div className="content_bottom">
            <div className="clear" />
          </div>
        </div>
      </div>

      <WelcomeDialog />

      <Footer />
    </>
  )
}

export default TermsConditions
