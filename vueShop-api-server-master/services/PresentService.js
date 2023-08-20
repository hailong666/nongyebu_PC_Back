var dao = require(path.join(process.cwd(),"dao/DAO"));

module.exports.createRole = function(params,cb) {
	if(!params.roleName) return cb("角色名称不能为空");
	if(!params.roleDesc) params.roleDesc = "";

	dao.create("RoleModel",{"role_name":params.roleName,"role_desc":params.roleDesc,"ps_ids":""},function(err,role){
		if(err) return cb("创建角色失败");
		cb(null,{
			"roleId" : role.role_id,
			"roleName" : role.role_name,
			"roleDesc" : role.role_desc
		});
	})
}

module.exports.createRole = function(params,cb) {
	if(!params.roleName) return cb("角色名称不能为空");
	if(!params.roleDesc) params.roleDesc = "";

	dao.create("RoleModel",{"role_name":params.roleName,"role_desc":params.roleDesc,"ps_ids":""},function(err,role){
		if(err) return cb("创建角色失败");
		cb(null,{
			"roleId" : role.role_id,
			"roleName" : role.role_name,
			"roleDesc" : role.role_desc
		});
	})
}

module.exports.createRole = function(params,cb) {
	if(!params.roleName) return cb("角色名称不能为空");
	if(!params.roleDesc) params.roleDesc = "";

	dao.create("RoleModel",{"role_name":params.roleName,"role_desc":params.roleDesc,"ps_ids":""},function(err,role){
		if(err) return cb("创建角色失败");
		cb(null,{
			"roleId" : role.role_id,
			"roleName" : role.role_name,
			"roleDesc" : role.role_desc
		});
	})
}
