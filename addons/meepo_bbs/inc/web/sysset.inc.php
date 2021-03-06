<?php
global $_W,$_GPC;
load()->model('setting');
load()->func('tpl');
$settings = setting_load('copyright');
$settings = $settings['copyright'];
if(empty($settings) || !is_array($settings)) {
	$settings = array();
}

$do = $_GPC['op']?trim($_GPC['op']):'copyright';

if ($do == 'copyright') {
	$_W['page']['title'] = '微社区-站点信息设置';
	if (checksubmit('submit')) {
		$data = array(
				'status' => $_GPC['status'],
				'reason' => $_GPC['reason'],
				'sitename' => $_GPC['sitename'],
				'url' => strexists($_GPC['url'], 'http://') ? $_GPC['url'] : "http://{$_GPC['url']}",
				'statcode' => htmlspecialchars_decode($_GPC['statcode']),
				'footerleft' => htmlspecialchars_decode($_GPC['footerleft']),
				'footerright' => htmlspecialchars_decode($_GPC['footerright']),
				'icon' => $_GPC['icon'],
				'flogo' => $_GPC['flogo'],
				'blogo' => $_GPC['blogo'],
				'baidumap' => $_GPC['baidumap'],
				'company' => $_GPC['company'],
				'address' => $_GPC['address'],
				'person' => $_GPC['person'],
				'phone' => $_GPC['phone'],
				'qq' => $_GPC['qq'],
				'email' => $_GPC['email'],
				'keywords' => $_GPC['keywords'],
				'description' => $_GPC['description'],
				'showhomepage' => intval($_GPC['showhomepage']),
		);
		setting_save($data, 'copyright');
		message('更新设置成功！', $this->createWebUrl('sysset'));
	}
}

include $this->template('sysset');