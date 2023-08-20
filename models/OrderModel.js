module.exports = function(db,callback){
	// 用户模型
	db.define("OrderModel",{
		id : Number,
		order_id : String,
		create_time : Number,
		expire_time : Number,
		receiverName : String,
		receiverPosition : String,
		foreignOrganization : String,
		giftName : String,
		gifPosition : String,
		remark : String,		
		item : String,		
		total : Number,
				
	},{
		table : "orders"
	});
	return callback();
}