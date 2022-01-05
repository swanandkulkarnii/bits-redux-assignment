import * as React from "react";
import { Grid, GridColumn } from "@progress/kendo-react-grid";
import "@progress/kendo-theme-material/dist/all.css";
import { fetchUsersData } from "../action";
import { connect } from "react-redux";
import totalUsersSelector from "../selector/totalUsersSelector";

class UsersList extends React.Component {
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
  };

  render() {
    return (
      <div>
        <h1>Users List</h1>
        <Grid
          style={{
            height: "440px",
          }}
          rowHeight={40}
          data={
            this.props.users
              ? this.props.users.slice(this.state.skip, this.state.skip + 10)
              : null
          }
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
  return {
    users: state.usersReducer.users,
    total: totalUsersSelector(state),
  };
};

export default connect(mapStateToProps, { fetchUsersData })(UsersList);
