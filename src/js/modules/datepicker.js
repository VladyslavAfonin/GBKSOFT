export default () => {

  const start = moment();
  const end = moment();

  function cb(start, end) {
    $('.filter__choice').html(start.format('MM/DD/YYYY') + ' - ' + end.format('MM/DD/YYYY'));
  }

  $('.filter__choice').daterangepicker({
    startDate: start,
    endDate: end,
    ranges: {
      '3 Months': [moment().subtract(3, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')],
      '6 Months': [moment().subtract(6, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')],
      '1 year': [moment().subtract(1, 'year').startOf('year'), moment().subtract(1, 'year').endOf('year')]
    }
  }, cb);

  cb(start, end);

};
