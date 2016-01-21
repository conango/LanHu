<?php
return array(
	
//数据库配置1
'DB_TYPE' => 'mysql', // 数据库类型
'DB_HOST' => '127.0.0.1', // 服务器地址
'DB_NAME' => 'lanhu', // 数据库名
'DB_USER' => 'root', // 用户名
'DB_PWD' => '', // 密码
'DB_PORT' => 8787, // 端口
'DB_PARAMS' => array(), // 数据库连接参数
'DB_PREFIX' => '', // 数据库表前缀
'DB_CHARSET'=> 'utf8', // 字符集
'DB_DEBUG' => TRUE, // 数据库调试模式 开启后可以记录SQL日志
//支付宝配置
'ALIPAY_CONFIG' => array(
'partner' => '', // 合作身份者id，以2088开头的16位纯数字
'seller_email' => '', // 收款支付宝账号，一般情况下收款账号就是签约账号
'key' => '', // 安全检验码，以数字和字母组成的32位字符
'sign_type' => strtoupper('MD5'), // 签名方式 不需修改
'input_charset' => strtolower('utf-8'), // 字符编码格式 目前支持 gbk 或 utf-8
'cacert' => getcwd().'\\cacert.pem', // ca证书路径地址，用于curl中ssl校验 请保证cacert.pem文件在当前文件夹目录中
'transport' =>  'http' // 访问模式,根据自己的服务器是否支持ssl访问，若支持请选择https；若不支持请选择http
)

);