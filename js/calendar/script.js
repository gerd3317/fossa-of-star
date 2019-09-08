var Cal = new Calendar();

function Calendar(){
  this.init = function(initDate){
    this.date = initDate ? initDate : new Date();
    this.first_dow = new Date(this.date.getFullYear(), this.date.getMonth(), 1).getDay();
    this.last_dow = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDay();
    this.end_num = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDate();
    this.dowLookup = {
      0 : 'Sun',
      1 : 'Mon',
      2 : 'Tues',
      3 : 'Wed',
      4 : 'Thurs',
      5 : 'Fri',
      6 : 'Sat'
    };
    this.monthLookup = {
      0 : 'January',
      1 : 'February',
      2 : 'March',
      3 : 'April',
      4 : 'May',
      5 : 'June',
      6 : 'July',
      7 : 'August',
      8 : 'September',
      9 : 'October',
      10 : 'November',
      11 : 'December',
    };
    this.build();

    var cal = this;
    // bind controls
    document.getElementById('nextMonth').addEventListener('click', function(){
			cal.nextMonth();
		});
    document.getElementById('prevMonth').addEventListener('click', function(){
  			cal.prevMonth();
  		});
  }
	this.destroy = function(){
		document.getElementById('calendar').innerHTML='';
	}
  // reinitialize with new date
	this.changeDateTo = function(upDate){
		this.init(upDate);
	}
  // advance month
  this.nextMonth = function(){
    (this.date.getMonth() + 1 ) > 11 ? this.init(new Date((this.date.getFullYear() + 1), 0))
      : this.init(new Date(this.date.getFullYear(), this.date.getMonth() + 1));
  }
  // go back monthLookup
  this.prevMonth = function(){
    (this.date.getMonth() - 1) < 0 ? this.init(new Date((this.date.getFullYear() - 1), 11))
      : this.init(new Date(this.date.getFullYear(), this.date.getMonth() - 1));
  }
  // build the markup
  this.build = function(){
    var heading_text = this.monthLookup[this.date.getMonth()],
        year_text = this.date.getFullYear(),
        container = document.getElementById('calendar'),
        markup = '';
    markup += `<h1><span class='ctrl' id='prevMonth'></span> ${heading_text} ${year_text} <span class='ctrl' id='nextMonth'></span></h1>`;
    markup += `<div id='calendar-contents'><div class='days-header'>`;
    for(day in this.dowLookup){
      markup += `<div class='dow'>${this.dowLookup[day]}</div>`;
    }
		markup += `</div><div class='days-container'>`;
    for(var i = 0; i < this.first_dow; i++){
      markup += `<div class='empty day'></div>`;
    }

    for(var j = 0; j < (42 - this.first_dow); j++){
			if(j < this.end_num ){
      markup += `<div class='day'><span class='day-num'><span>${j+1}</span></div>`;
			}
			else{
				markup += `<div class='empty day'></div>`;
			}
    }
    markup += `</div></div>`;
    container.innerHTML = markup;
  }
  // initialize immediately when "new" is called
	this.init();
}