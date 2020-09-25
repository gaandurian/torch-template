import React from "react";
import { MainPageTitle } from "../../components/shared/Typography";
import ChartsSection from "../../components/dashboard/ChartsSection";
import StatsCardsSection from "../../components/dashboard/StatsCardsSection";
import { Grid } from "semantic-ui-react";
import UserRequests from "../../components/dashboard/UserRequests";
import UserFeed from "../../components/dashboard/UserFeed/UserFeed";
import ApprovalTable from "../../components/dashboard/ApprovalTable/ApprovalTable";
const { Row, Column } = Grid;

export default function Dashboard() {
  return (
    <div>
      <MainPageTitle title="Dashboard" />
      <Grid columns={2}>
        <Row>
          <Column width={13}>
            <StatsCardsSection />
            <ChartsSection />
            <ApprovalTable />
          </Column>
          <Column width={3}>
            <UserFeed />
            <UserRequests />
          </Column>
        </Row>
      </Grid>
    </div>
  );
}
