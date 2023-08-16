import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import { Grid, useMediaQuery, useTheme } from '@mui/material';


export default function RandTimeline() {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Grid container justifyContent="center" >
      <Grid item xs={12} md={6}>
        <Timeline position="alternate">
          <TimelineItem >
            <TimelineOppositeContent color="text.secondary"
              sx={{
                fontSize: isMobile ? 10 : 14
              }}
            >
              09:30 am
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent
              sx={{
                fontSize: isMobile ? 10 : 14
              }}
            >Eat</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent color="text.secondary"
              sx={{
                fontSize: isMobile ? 10 : 14
              }}
            >10:00 am
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent
              sx={{
                fontSize: isMobile ? 10 : 14
              }}
            >Code
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent color="text.secondary"
              sx={{
                fontSize: isMobile ? 10 : 14
              }}
            >12:00 am
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent
              sx={{
                fontSize: isMobile ? 10 : 14
              }}
            >Sleep</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent color="text.secondary"
              sx={{
                fontSize: isMobile ? 10 : 14
              }}
            >9:00 am
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot
                sx={{
                  width: isMobile ? '1px' : '12px',
                  height: isMobile ? '1px' : '12px',
                }}
              />
              <TimelineConnector
                sx={{
                  height: isMobile ? '1px' : '30px'
                }}
              />
            </TimelineSeparator>
            <TimelineContent
              sx={{
                fontSize: isMobile ? 10 : 14
              }}
            >Repeat
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Grid>
    </Grid>
  );
}
