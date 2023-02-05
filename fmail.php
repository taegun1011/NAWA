<?php
$title = strip_tags(htmlspecialchars($_POST['address']));
$name = strip_tags(htmlspecialchars($_POST['name']));
$message = strip_tags(htmlspecialchars($_POST['content']));
$email_address = "";// 회신용메일주소(없으면 에러)

$to = ''; // 받는 측의 이메일 주소를 기입하는 부분
$email_subject = "[문의메일] $title"; // 메일 제목에 해당하는 부분
$email_body = "<p>성명: $name</p><p>내용: $message</p>";
$headers = "Return-Path: $email_address\n"; // 답장 주소
$headers .= "From: 방문자 <$email_address>\n";// 사용자 이름 변경
$headers .= "Content-Type: text/html;charset=utf-8\n"; //html문서로 인식
mail($to,'=?UTF-8?B?'.base64_encode($email_subject).'?=',$email_body,$headers,'-f'.$email_address);
$result = array('result'=>'true');
echo json_encode($result);
exit;
?>

