import React from "react";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import { Grid } from "semantic-ui-react";
import {
  BAR_CHART,
  PIE_CHART,
  LINE_CHART,
  BAR_CHART_OPTIONS,
  LINE_CHART_OPTIONS,
} from "./chart-data";
import StyledSegment from "../../../components/shared/StyledSegment";
const { Column, Row } = Grid;

export default function ChartsSection() {
  return (
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
  );
}
