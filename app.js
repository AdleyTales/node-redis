
const redis = require('redis');

var RDS_PORT = 6379,
    RDS_HOST = '127.0.0.1',
    RDS_PWD = 'yourpassword', //第一种方式：设置的redis的密码 在下面的选项里：auth_pass: RDS_PWD
    RDS_OPTS = {};

const client = redis.createClient(RDS_PORT,RDS_HOST,RDS_OPTS); //端口号 服务器IP 设置项

// Redis 默认是不需要密码的，但是这样不太安全。需要设置密码。

/*
* Redis设置密码：
*   打开redis.conf文件，找到 requirepass 取消注释，设置密码 yourpassword
*   requirepass yourpassword
*/

// 第二种方式
// client.auth(RDS_PWD,()=>{
//   console.log('通过认证');
// });

client.on('error',(err)=>{
  console.log(`连接失败: ${err}`);
});

client.on('ready',(err)=>{
  console.log(`ready`);
});

// client.on('connect',()=>{
//   client.set('keyname', 'valuename',redis.print);
//   client.get('keyname',redis.print);
//   console.log('connect');
// });

// 多个事务
client.on('connect',()=>{

});

client.on('end',(err)=>{
  console.log(`end`);
});
