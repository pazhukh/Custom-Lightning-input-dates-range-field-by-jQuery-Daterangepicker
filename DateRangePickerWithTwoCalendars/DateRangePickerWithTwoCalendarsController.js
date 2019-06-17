({
	configureDateRangePicker : function(component, event, helper) {
        const today = new Date();     
        let minDate = new Date(today);
        minDate.setDate(today.getDate() + 7);
        
        $('#dateRangePicker').daterangepicker({
            'minDate': minDate
        }, (start, end, label) => {
            $('#dateRangePickerStartDate').val(start.format('YYYY-MM-DD'));
            $('#dateRangePickerEndDate').val(end.format('YYYY-MM-DD'));
            console.log('New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
        });
        
        $('#dateRangePicker').val('');
        
        $('#dateRangePicker').on('cancel.daterangepicker', function(ev, picker) {
            $('#dateRangePicker').val('');
            $('#dateRangePickerStartDate').val('');
            $('#dateRangePickerEndDate').val('');
        }); 
	},
    
    getDates : function(component, event, helper) {
        const startDate = document.getElementById('dateRangePickerStartDate').value;
        const endDate = document.getElementById('dateRangePickerEndDate').value;
        alert('Start date => ' + startDate + '\n' + 'End date => ' + endDate);
    }
})