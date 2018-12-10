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
        <div class="aside-calendar-function">
            <span>{{browseDate}}</span>
            <div class="aside-calendar-btns">
                <span class="unSelectable" v-on:click="browsePrev"><</span>
                <span class="unSelectable" v-on:click="browseNext">></span>
            </div>
        </div>
        <!--calendar itself-->
        <ul class="aside-calendar-title">
            <li>一</li>
            <li>二</li>
            <li>三</li>
            <li>四</li>
            <li>五</li>
            <li>六</li>
            <li>日</li>
        </ul>
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
            browseDay: 1,
            browseWeekday: 1,
            browseMonth: 1,
            browseYear: 1970,
            browseDate: '',
            //basic component of days: an date object contains at least day date
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
            if(dateobj == null){
                var d = new Date();
                var day = d.getDate();
                var month = d.getMonth();
                var year = d.getFullYear();
                
                var monthStart = new Date(year, month, 1);
                // var weekdayStart = monthStart.getDay();

                this.constructDay(monthStart);
                
                this.curDay = day;
                this.curMonth = month + 1;
                this.curYear = year;
                this.browseDay = day;
                this.browseMonth = month;
                this.browseYear = year;

                this.browseDate = this.formatDate(year, month + 1, day);
            }else{
                var day = dateobj.getDate();
                var month = dateobj.getMonth();
                var year = dateobj.getFullYear();
                console.log(dateobj.toLocaleDateString());
                var monthStart = new Date(year, month + 1, 1);

                this.constructDay(monthStart);
            }
        },
        constructDay: function(dateobj){
            var day = dateobj.getDate();
            var weekday = dateobj.getDay();
            var month = dateobj.getMonth();
            var year = dateobj.getFullYear();
            this.days.length = 0;
            
            for(var i = weekday - 1; i >= 1;--i){
                var d = new Date(year, month, day);
                d.setDate(-i + 1);
                console.log(d.toLocaleDateString());
                var newDay = {
                    day: d.getDate(),
                }
                this.days.push(newDay);
            }
            for(var i = 1;i <= this.cellNum - weekday + 1;++i){
                var d = new Date(year, month, i);
                console.log(d.toLocaleDateString());
                var newDay = {
                    day: d.getDate(),
                }
                this.days.push(newDay);
            }
        },
        browsePrev: function(){
            // --this.browseMonth;
            // if(this.browseMonth < 0){
            //     --this.browseYear;
            //     this.browseMonth = 11;
            // }
            this.browseDate = this.formatDate(this.browseYear, this.browseMonth, this.curDay);
            var d = new Date(this.browseYear, this.browseMonth--, this.curDay);
            d.setDate(-this.cellNum);
            console.log(d.toLocaleDateString() + ' ' + this.browseMonth);
            this.initData(d);
        },
        browseNext: function(){
            //++this.browseMonth;
            if(this.browseMonth > 11){
                ++this.browseYear;
                this.browseMonth = 0;
            }
            this.browseDate = this.formatDate(this.browseYear, this.browseMonth, this.curDay);
            var d = new Date(this.browseYear, this.browseMonth++, this.curDay);
            this.initData(d);
        },
        formatDate: function(year, month, day){
            var date = year + '-' + month + '-' + day;
            return date;
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