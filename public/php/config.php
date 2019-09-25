<?php
    require_once($_SERVER['DOCUMENT_ROOT'] . '/smartbasket/php/phpmailer/phpmailer.php');

		// *** SMTP *** //

		//		 require_once($_SERVER['DOCUMENT_ROOT'] . '/smartbasket/php/phpmailer/smtp.php');
		//		 const HOST = '';
		//		 const LOGIN = '';
		//		 const PASS = '';
		//		 const PORT = '';

		// *** /SMTP *** //
   
    const SENDER = 'sender@yandex.ru';
    const CATCHER = 'catcher@list.ru';
    const SUBJECT = 'Заявка с сайта';
    const CHARSET = 'UTF-8';
    