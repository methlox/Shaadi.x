import React from "react";

import {
  DiscoverContainer,
  H1,
  Wrapper,
  Card,
  Icon,
  H2,
  P
} from "./DiscoverElements";

import Icon1 from "../../Media/react.svg";
import Icon2 from "../../Media/express.svg";
import Icon3 from "../../Media/django.svg";
import Icon4 from "../../Media/nextjs.svg";
import Icon5 from "../../Media/vue.svg";
import Icon6 from "../../Media/mongo.svg";

const Discover = () => {
  return (
    <DiscoverContainer id="discover">
      <H1>Discover</H1>
      <Wrapper>
      <Card>
          <Icon src={Icon5} />
          <H2>Vue JS</H2>
          <P>Are you Vim because I can't quit you 😘</P>
        </Card>

        <Card>
          <Icon src={Icon4} />
          <H2>Next JS</H2>
          <P>Better than your previous and your Next</P>
        </Card>

        <Card>
          <Icon src={Icon1} />
          <H2>React</H2>
          <P>
            Popularly mistaken as a framework 😉
          </P>
        </Card>

        <Card>
          <Icon src={Icon6} />
          <H2>MongoDB</H2>
          <P>Can't find your number in this database :)</P>
        </Card>

        <Card>
          <Icon src={Icon2} />
          <H2>Express JS</H2>
          <P>Never lose your session data again ❤️</P>
        </Card>

        <Card>
          <Icon src={Icon3} />
          <H2>Django</H2>
          <P>Wanna debug together later tonight?</P>
        </Card>

      </Wrapper>
    </DiscoverContainer>
  );
};

export default Discover;