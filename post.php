<? 
$phone = $_POST['phone'];


$mail_message = '
<html>
<head>
    <title>Заявка</title>
</head>
<body>
    <h2>Заказ</h2>
    <ul>
        
        <li>Телефон: ' .$phone. '</li>
      
    </ul>
</body>
</html>';

$headers = "From: Администратор сайта \r\n".
"MIME-Version: 1.0" . "\r\n" .
"Content-type: text/html; charset=UTF-8" . "\r\n";

$mail = mail('nptyushkina@bk.ru', 'Заказ', $mail_message, $headers);

?>