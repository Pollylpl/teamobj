



var id = 0;

var goods = [
	{
		good_id : id++,
		good_url : 'dist/img/good.png',
		good_name : '物品1',
		good_price : 10
	},
	{
		good_id : id++,
		good_url : 'dist/img/good.png',
		good_name : '物品2',
		good_price : 20
	},
	{
		good_id : id++,
		good_url : 'dist/img/good.png',
		good_name : '物品3',
		good_price : 30
	}
];

var Static = {
	good : 'goodlist'
}

function getPrice ( id ) {
	for ( var i = 0; i < goods.length; i++ ) {
		if ( goods[i].good_id == id ) {
			return goods[i].good_price;
		}
	}
}


function init () {

	var goodlist = localStorage.getItem( Static.good );//[1,2,1,1,2]

	goodlist = JSON.parse( goodlist ) || [];

	var total = 0;

	for ( var i = 0; i < goodlist.length; i++ ) {
		total += getPrice( goodlist[i] );
	}

	$('#price').html( '💰' + total );

}

init();
















