import * as React from "react";
import { Grid, GridColumn } from "@progress/kendo-react-grid";
import "@progress/kendo-theme-material/dist/all.css";
import { fetchUsersData } from "./ConnorsGroup.Client.React/features/app/users/action";
import { connect } from "react-redux";

class App extends React.Component {
  constructor(props) {
    super(props);
    //console.log("Hii", this.props);
    this.state = {
      skip: 0,
      pageNo: 1,
    };
  }

  componentDidMount() {
    //const propsMadheKayAhe = this.props;
    console.log("propsMadheKayAhe", this.props);
    this.props.fetchUsersData(this.state.pageNo);
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.props.users !== prevProps.users) {
  //     this.props.fetchUsersData(this.state.pageNo);
  //   }
  // }

  onPageChange = (event) => {
    if (this.state.skip % 12 == 0) {
      this.setState({
        pageNo: this.state.pageNo + 1,
      });
    }
    this.setState({
      skip: event.page.skip,
    });
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
          pageSize={20}
          total={this.props.total[0]}
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
    users: state.usersReducer.get("users"),
    total: state.usersReducer.get("total"),
  };
};

export default connect(mapStateToProps, { fetchUsersData })(App);
