// reportWebVitals.js
export function reportWebVitals(metric) {
    if (process.env.NODE_ENV === 'production') {
      // Send the metric data to an analytics service or monitoring tool
      console.log(metric);
    }
  }
  