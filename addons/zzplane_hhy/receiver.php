<?php
/**
 * 粽子大战模块订阅器
 *
 * @author 步飞凌云
 * @url http://www.012wz.com
 */
defined('IN_IA') or exit('Access Denied');

class Zzplane_hhyModuleReceiver extends WeModuleReceiver {
	public function receive() {
		$type = $this->message['type'];
		//这里定义此模块进行消息订阅时的, 消息到达以后的具体处理过程, 请查看微赞文档来编写你的代码
	}
}