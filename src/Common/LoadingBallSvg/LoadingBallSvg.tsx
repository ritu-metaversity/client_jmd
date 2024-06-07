const LoadingBallSvg = () => {
  return (
    <>
      <div
        color="#fff"
        style={{
          width: "100%",
          background: "rgba(51, 51, 51, 0.8)",
          height: "100%",
          position: "absolute",
          top: "0",
        }}
        className="ng-tns-c39-0"
      >
        <div
          className="ngx-spinner-overlay ng-tns-c39-0 ng-animate-disabled ng-trigger ng-trigger-fadeIn ng-star-inserted"
          style={{
            zIndex: 99999,
            position: "absolute",
            opacity: 1,
          }}
        >
          <div
            className="ng-tns-c39-0 la-2x la-ball-scale-multiple ng-star-inserted"
            style={{ color: "rgb(255, 255, 255)" }}
          >
            <div className="ng-tns-c39-0 ng-star-inserted" />
            <div className="ng-tns-c39-0 ng-star-inserted" />
            <div className="ng-tns-c39-0 ng-star-inserted" />
          </div>

          <div className="loading-text ng-tns-c39-0" style={{ zIndex: 99999 }}>
            <p
              _ngcontent-yxs-c50=""
              style={{ fontSize: 12, color: "white", paddingTop: 12 }}
              className="ng-tns-c39-0"
            >
              Loading...
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoadingBallSvg
