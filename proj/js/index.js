var headerDropMenu = {
    data: function(){
        var formStyle = [
            {
                day: 'Day',
                val: 1,
            },
            {
                week: 'Week',
                val: 2,
            },
            {
                month: 'Month',
                val: 3,
            },
            {
                year: 'Year',
                val: 4,
            },

        ]
        return formStyle;
    },
    template:`
        
    `
}

var calendar = new Vue({
    el: '.calendarapp',
    data: {
        hamburger: false,
        formStyle: [
            {
                day: 'Day',
                val: 1,
            },
            {
                week: 'Week',
                val: 2,
            },
            {
                month: 'Month',
                val: 3,
            },
            {
                year: 'Year',
                val: 4,
            },

        ]
    },
    created: function () {

    },
    methods: {
        initData: function (dateStr) {

        },
        formatDate: function (year, month, day) {

        },
        toggleActive: function () {
            this.hamburger = !this.hamburger;
        }
    },
    computed: {

    },
})