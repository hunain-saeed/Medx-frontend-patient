import React, { Component } from "react";

import { connect } from "react-redux";
import { getDocShedule } from "../../actions/profile";

import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Button } from "@material-ui/core";
import TabPanel from "./TabPanel";

class TabScroll extends Component {
  state = { value: 0 };

  handleChange = (e, newValue) => {
    this.setState({ value: newValue });
  };

  componentDidMount() {
    this.props.getDocShedule(this.props.doc_id);
  }

  drawTabs = () => {
    var k = 0;
    let weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var mS = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ];
    if (this.props.docShedule.length > 0) {
      return this.props.docShedule.map((datetime) => {
        var date = new Date(datetime.date);
        var ddm =
          weekday[date.getDay()] +
          ", " +
          mS[date.getMonth()] +
          " " +
          date.getDate();
          k = k+1;
        return <Tab key={k} label={ddm} />;
      });
    } else {
      return <h1>No free time slots available for selected date</h1>;
    }
  };

  drawTime = () => {
      var count = 0;
      var k = 0;
    if (this.props.docShedule.length > 0) {
      return this.props.docShedule.map((datetime) => {
        return (
          <TabPanel key={count} value={this.state.value} index={count++}>
            <div className="row">
              {datetime.time.map((t) => {
                k = k+1;
                return (
                  <div key={k} className="col-lg-2 col-sm-4 col-6 mb-4">
                    <Button variant="contained" onClick={()=>{console.log(t, datetime.date)}} className="px-5">{t}</Button>
                  </div>
                );
              })}
            </div>
          </TabPanel>
        );
      });
    }
  };

  render() {
    return this.props.loading ? (
      <Backdrop className="loading" open={true}>
        <CircularProgress color="inherit" />
      </Backdrop>
    ) : (
      <div>
        <AppBar position="static" color="default">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            variant="scrollable"
            scrollButtons="auto"
          >
            {this.drawTabs()}
          </Tabs>
        </AppBar>
        {this.drawTime()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    docShedule: state.shedule.docShedule,
    loading: state.shedule.loading,
  };
};

export default connect(mapStateToProps, { getDocShedule })(TabScroll);
