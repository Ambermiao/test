// JavaScript Document

$.datepicker.regional['zh-TW'] = {
		numberOfMonths:1, //兩組月份
		constrainInput:true,//限制符合日期格式
		dateFormat: 'yy-mm-dd', 
		minDate : '-1y',//限制過去日期不可點
		maxDate: '+2y',//限制1年
		changeYear : true,//下拉年分
		changeMonth : true,//下拉月份
		showMonthAfterYear:true,//下拉選單年月互換
		clearText: '清除', 
		clearStatus: '清除已選日期',
		closeText: '關閉', 
		closeStatus: '取消選擇',
		prevText: '上一月', 
		prevStatus: '顯示上個月',
		nextText: '下一月', 
		nextStatus: '顯示下個月',
		currentText: '今天', 
		currentStatus: '顯示本月',
		monthNames: ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
		monthNamesShort: ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
		monthStatus: '選擇月份', 
		yearStatus: '選擇年份',
		weekHeader: '周', 
		weekStatus: '',
		dayNames: ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'],
		dayNamesShort: ['周日','周一','周二','周三','周四','周五','周六'],
		dayNamesMin: ['日','一','二','三','四','五','六'],
		dayStatus: '設定每周第一天', 
		dateStatus: '選擇 m月 d日, DD',
		firstDay: 1, 
		initStatus: '請選擇日期'
	};