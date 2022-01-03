import * as React from "react";
import { Grid, GridColumn } from "@progress/kendo-react-grid";
import "@progress/kendo-theme-material/dist/all.css";
import { fetchUsersData } from "./ConnorsGroup.Client.React/features/app/users/action";
import { connect } from "react-redux";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      skip: 0,
      pageNo: 1,
    };
  }

  componentDidMount() {
    this.props.fetchUsersData(this.state.pageNo);
  }

  onPageChange = (event) => {
    this.setState({
      skip: event.page.skip,
    });
    if (event.page.skip % 10 === 0) {
      this.setState(
        {
          pageNo: this.state.pageNo + 1,
        },
        () => this.props.fetchUsersData(this.state.pageNo)
      );
    }

    console.log("skip", this.state.skip);
    console.log("PageNo", this.state.pageNo);
  };

  render() {
    console.log("props.users", this.props.users);
    return (
      <div>
        <h1>Users List</h1>
        <Grid
          style={{
            height: "440px",
          }}
          rowHeight={40}
          data={this.props.users.slice(this.state.skip, this.state.skip + 10)}
          pageSize={10}
          total={this.props.total}
          skip={this.skip}
          scrollable={"virtual"}
          onPageChange={this.onPageChange}>
          <GridColumn field="id" title="Id" />
          <GridColumn field="name" title="Name" />
          <GridColumn field="email" title="Email" />
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("state in map", state);
  return {
    users: state.usersReducer.users.sort((a, b) => a.id - b.id),
    total: state.usersReducer.total,
  };
};

export default connect(mapStateToProps, { fetchUsersData })(App);
