import React from "react";
import { Grid } from "semantic-ui-react";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import {
  BAR_CHART,
  PIE_CHART,
  LINE_CHART,
  BAR_CHART_OPTIONS,
  LINE_CHART_OPTIONS,
} from "./chart-data";
import { MainPageTitle } from "../../components/shared/Typography";
import StyledSegment from "../../components/shared/StyledSegment";
const { Column, Row } = Grid;

export default function Dashboard() {
  return (
    <div>
      <MainPageTitle title="Dashboard" />
      <Grid columns={3}>
        <Row>
          <Column>
            <StyledSegment title="Events">
              <Bar data={BAR_CHART} options={BAR_CHART_OPTIONS} />
            </StyledSegment>
          </Column>
          <Column>
            <StyledSegment title="Profits">
              <Doughnut data={PIE_CHART} />
            </StyledSegment>
          </Column>
          <Column>
            <StyledSegment title="Engagement">
              <Line data={LINE_CHART} options={LINE_CHART_OPTIONS} />
            </StyledSegment>
          </Column>
        </Row>
      </Grid>
    </div>
  );
}
