import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { ICoursesFields } from '../../@types/generated/contentful';

type CourseListProps = {
  course: ICoursesFields;
};

export default function Course(props: CourseListProps) {
  return (
    <div>
      {props.course ? (
        <Card>
          <CardMedia
            style={{ height: 0, paddingTop: '56.25%' }}
            image={props.course.courseImage ? props.course.courseImage.fields.file.url : ''}
            title={props.course.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h1">
              {props.course.title}
            </Typography>
            <Typography variant="body1">{props.course.description}</Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary" href={props.course.url}>
              Go to Course
            </Button>
          </CardActions>
        </Card>
      ) : null}
    </div>
  );
}
