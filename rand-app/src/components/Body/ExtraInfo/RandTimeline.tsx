import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import { Box, Grid, useMediaQuery, useTheme } from '@mui/material';


const RandTimeline: React.FC = () => {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Grid container spacing={0} padding={3} display="flex" justifyContent="start-end">
      <Grid item xs={12} sm={3} md={12}>
        <Box sx={{
          bgcolor: 'white',
          width: '100%',
          mt: isMobile ? -2 : 0,
          height: { xs: '5vh', md: '12vh', lg: '20vh' }
        }}>
          <Timeline >
            <TimelineItem >
              <TimelineOppositeContent color="text.secondary"
                sx={{
                  fontSize: isMobile ? 9 : 14
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
                  fontSize: isMobile ? 9 : 14
                }}
              >Eat</TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent color="text.secondary"
                sx={{
                  fontSize: isMobile ? 9 : 14
                }}
              >10:00 am
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent
                sx={{
                  fontSize: isMobile ? 9 : 14
                }}
              >Code
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent color="text.secondary"
                sx={{
                  fontSize: isMobile ? 9 : 14
                }}
              >12:00 am
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent
                sx={{
                  fontSize: isMobile ? 9 : 14
                }}
              >Sleep</TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent color="text.secondary"
                sx={{
                  fontSize: isMobile ? 9 : 14
                }}
              >9:00 am
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot
                  sx={{
                    width: isMobile ? '1px' : '12px',
                    height: isMobile ? '1px' : '12px',
                    ml: 0.5
                  }}
                />
                <TimelineConnector
                  sx={{
                    width: isMobile ? '1px' : '12px',
                    height: isMobile ? '1px' : '30px',
                    ml: 0.5
                  }}
                />
              </TimelineSeparator>
              <TimelineContent
                sx={{
                  fontSize: isMobile ? 9 : 14
                }}
              >Repeat
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </Box>
      </Grid>
    </Grid>
  );
}
export default RandTimeline;