var headerDropMenu = {
    data: function () {
        var formStyle = [{
                style: 'Day',
                val: 1,
            },
            {
                style: 'Week',
                val: 2,
            },
            {
                style: 'Month',
                val: 3,
            },
            {
                style: 'Year',
                val: 4,
            },

        ]
        return {formStyle};
    },
    template: `
    <transition name="slide-fade">
        <div class="header-dropbox" >
            <li v-for="form in formStyle">{{form.style}}</li>
        </div>
    </transition>
    `
}

var asidecalendar = {
    template: `
    <div>
        <!--current month-->
        <span></span>
        <!--switch arrow btn-->
        <span><</span>
        <span>></span>
        <!--calendar itself-->
        <ul class="smallcalendar">
            <li v-for="day in days">
                <span>{{day.day}}</span>
            </li>
        </ul>
    </div>
    `,
    data: function(){
        var asidecalendardata = {
            curDay: 1,
            curWeek: 1,
            curMonth: 1,
            curYear: 1970,
            //basic component of days: an date object contains day, week, month and year
            days: [],
            cellNum: 42,
        }
        return asidecalendardata;
    },
    created: function(){
        this.initData(null);
    },
    methods: {
        initData: function(dateobj){

        }
    }
}

var calendar = new Vue({
    el: '.calendarapp',
    data: {
        hamburger: false,
        formStyle: [{
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

        ],
        dropbox: false,
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
        },
        toggleHeaderDropbox: function () {
            this.dropbox = !this.dropbox;
        }
    },
    computed: {

    },
    components:{
        'headerDropMenu': headerDropMenu,
        'asidecalendar': asidecalendar,
    }
})