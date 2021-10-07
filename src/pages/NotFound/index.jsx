import './not-found.scss';

import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";

import LandingHeader from "../../components/LandingHeader";
import Button from "../../components/Button";

function NotFoundPage() {
  return (
    <>
      <LandingHeader />
      <div className="container">
        <div className="content not-found">
          <h1>
            404
          </h1>
          <p>
            <FormattedMessage id="404.intro" values={{
              br: <br />
            }}/>
          </p>
          <Link to="/learn">
            <Button className="warning">
              <FormattedMessage id="general.startLearning" />
            </Button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default NotFoundPage