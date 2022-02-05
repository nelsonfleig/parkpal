import { SeriesDataItem } from '../../../graphql/__generated__';

export const buildChart = (timeSeries: Array<SeriesDataItem>) => ({
  title: {
    text: 'Daily Revenue',
    style: {
      color: '#fff',
    },
  },
  legend: {
    itemStyle: { color: 'white' },
  },
  series: [
    {
      name: 'Day',
      data: timeSeries.map(({ sum }) => sum),
    },
  ],
  xAxis: {
    title: {
      // text: 'TEST',
      style: {
        color: 'white',
      },
    },
    categories: timeSeries.map(({ date }) => date),
    lineColor: '#fff',
    tickColor: '#fff',
    labels: {
      style: {
        color: '#fff',
      },
    },
  },
  yAxis: {
    gridLineWidth: 0,
    minorGridLineWidth: 0,
    title: {
      text: 'EUR',
      style: {
        color: 'white',
      },
    },
    lineColor: '#fff',
    lineWidth: 1,
    tickWidth: 1,
    tickColor: '#fff',
    labels: {
      style: {
        color: '#fff',
      },
    },
  },
  chart: {
    backgroundColor: '#0A2540',
    borderRadius: '.5rem',
    style: {
      color: '#f00',
    },
    renderTo: 'container',
  },
});
