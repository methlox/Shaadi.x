import React from "react";

import {
  MatchesContainer,
  H1,
  Wrapper,
  Card,
  Icon,
  H2,
  P
} from "./MatchElements";

import Icon1 from "../../Media/react.svg";
import Icon2 from "../../Media/express.svg";
// import Icon3 from "../../Media/django.svg";
import Icon4 from "../../Media/nextjs.svg";

const Matches = () => {
  return (
    <MatchesContainer id="matches">
      <H1>Your Matches</H1>
      <Wrapper>
        <Card>
          <Icon src={Icon1} />
          <H2>React</H2>
          <P>
            Popularly mistaken as a framework 😉
          </P>
        </Card>

        <Card>
          <Icon src={Icon2} />
          <H2>Express JS</H2>
          <P>Never lose your session data again ❤️</P>
        </Card>

        {/* <Card>
          <Icon src={Icon3} />
          <H2>Django</H2>
          <P>Wanna debug together later tonight?</P>
        </Card> */}

        <Card>
          <Icon src={Icon4} />
          <H2>Next JS</H2>
          <P>Better than your previous and your Next</P>
        </Card>
      </Wrapper>
    </MatchesContainer>
  );
};

export default Matches;