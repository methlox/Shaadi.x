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
          <Icon src={Icon6} />
          <H2>MongoDB</H2>
          <P>Can't find your number in this database :)</P>
        </Card>

      </Wrapper>
    </DiscoverContainer>
  );
};

export default Discover;