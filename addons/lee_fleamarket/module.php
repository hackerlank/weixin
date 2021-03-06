<?php
/**
 */
defined('IN_IA') or exit('Access Denied');

class Lee_FleamarketModule extends WeModule {
	//
		public function fieldsFormDisplay($rid = 0) {

		global $_W;
		
		if (!empty($rid)) {
		
			$reply = pdo_fetch("SELECT * FROM ".tablename('lee_fleamarket_reply')." WHERE rid = :rid ORDER BY `id` DESC", array(':rid' => $rid));				
 		} 
		load()->func('tpl');
		include $this->template('form');
		
	}

	public function fieldsFormValidate($rid = 0) {

		return '';
		
	}

	public function fieldsFormSubmit($rid) {

		global $_GPC, $_W;
		
		load()->func('tpl');
		
		$id = intval($_GPC['reply_id']);
		
		$insert = array(
		
			'rid' => $rid,
			
            'title' => $_GPC['title'],
			
			'picture' => $_GPC['picture'],
			
			'description' => $_GPC['description'],
			
			'content' => htmlspecialchars_decode($_GPC['content']),
			
		);
		
		if (empty($id)) {
		
			pdo_insert('lee_fleamarket_reply', $insert);
			
		} 
		else {
		
			if (!empty($_GPC['picture'])) {
			
				file_delete($_GPC['picture-old']);
				
			} 
			else {
			
				unset($insert['picture']);
				
			}

			pdo_update('lee_fleamarket_reply', $insert, array('id' => $id));
			
		}

	}

	public function ruleDeleted($rid) {

		global $_W;
		
		load()->func('file');
		
		$replies = pdo_fetchall("SELECT id, picture FROM ".tablename('lee_fleamarket_reply')." WHERE rid = '$rid'");
		
		$deleteid = array();
		
		if (!empty($replies)) {
		
			foreach ($replies as $index => $row) {
			
				file_delete($row['picture']);
				
				$deleteid[] = $row['id'];
				
			}
			
		}
		
		pdo_delete('lee_fleamarket_reply', "id IN ('".implode("','", $deleteid)."')");
		
		return true;
		
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	public function settingsDisplay($settings) {

			global $_GPC, $_W;

			if(checksubmit()) {

				$cfg = array(

					'tel' => $_GPC['tel'],
					'status' => $_GPC['status'],
				);

				$this->saveSettings($cfg);
				message('保存成功', 'refresh');
			}

			include $this->template('setting');

		}
}