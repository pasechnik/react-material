import React, { Component, ChangeEvent } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import * as contentful from 'contentful';
import Course from './Course';
import { ICoursesFields } from '../../@types/generated/contentful';

const SPACE_ID = '1zz6y1zaq1dm';
const ACCESS_TOKEN = 'TcZ1SwPOIyg15U2zupq5nLE4i0dg7NdOsfMDBNfQTmg';

const client = contentful.createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN,
});

// the clock's state has one field: The current time, based upon the
// JavaScript class Date
type CourseListState = {
  courses: ICoursesFields[];
  searchString: string;
};
type CourseListProps = {};

class CourseList extends Component<CourseListProps, CourseListState> {
  state = {
    courses: [],
    searchString: '',
  };

  constructor(props: CourseListProps) {
    super(props);
    this.getCourses();
  }

  getCourses = () => {
    client
      .getEntries<ICoursesFields>({
        content_type: 'courses',
        query: this.state.searchString,
      })
      .then((response) => {
        this.setState({ courses: response.items.map<ICoursesFields>((f) => f.fields) });
      })
      .catch((err) => console.error(err));
  };

  onSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value) {
      this.setState({ searchString: event.target.value });
    } else {
      this.setState({ searchString: '' });
    }
    this.getCourses();
  };

  render() {
    return (
      <>
        {this.state.courses ? (
          <div>
            <TextField
              style={{ padding: 24 }}
              id="searchInput"
              placeholder="Search for courses"
              margin="normal"
              onChange={this.onSearchInputChange}
            />
            <Grid container spacing={4} style={{ padding: 24 }}>
              {this.state.courses.map((course, index) => (
                <Grid key={index} item xs={12} sm={6} lg={4} xl={3}>
                  <Course course={course} />
                </Grid>
              ))}
            </Grid>
          </div>
        ) : (
          'No courses found'
        )}
      </>
    );
  }
}

export default CourseList;
