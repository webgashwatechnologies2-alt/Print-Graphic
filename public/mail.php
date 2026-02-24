<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit;
}

require 'PHPMailer/PHPMailerAutoload.php';

// Get POST data
$inputJSON = file_get_contents('php://input');
$input = json_decode($inputJSON, TRUE);

if (!$input) {
    $input = $_POST;
}

$name = isset($input['name']) ? $input['name'] : 'Not provided';
$email = isset($input['email']) ? $input['email'] : 'Not provided';
$phone = isset($input['phone']) ? $input['phone'] : 'Not provided';
$subject = isset($input['subject']) ? $input['subject'] : 'New Lead from Website';
$message = isset($input['message']) ? $input['message'] : '';
$service = isset($input['service']) ? $input['service'] : '';
$date = isset($input['date']) ? $input['date'] : '';

$mail = new PHPMailer;

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isMail();                                      // Use server's internal mail system
// SMTP settings are not needed for isMail() but keeping them as comments for reference
/*
$mail->isSMTP();
$mail->Host = 'localhost';
$mail->SMTPAuth = true;
$mail->Username = 'info@pgadvertiser.com';
$mail->Password = 'Printgraphicadv@@2026!#';
$mail->Port = 25;
*/

// Bypass SSL verification (Fixes "SMTP connect() failed" on many hosts)
$mail->SMTPOptions = array(
    'ssl' => array(
        'verify_peer' => false,
        'verify_peer_name' => false,
        'allow_self_signed' => true
    )
);

$mail->setFrom('info@pgadvertiser.com', 'PG Advertiser Website');
$mail->Sender = 'info@pgadvertiser.com';
$mail->addAddress('info@pgadvertiser.com');     // Add a recipient
$mail->addReplyTo($email, $name);

$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = $subject;
$emailContent = "
    <h2>New Form Submission</h2>
    <p><strong>Name:</strong> $name</p>
    <p><strong>Email:</strong> $email</p>
    <p><strong>Phone:</strong> $phone</p>
";

if ($service) {
    $emailContent .= "<p><strong>Service Interest:</strong> $service</p>";
}
if ($date) {
    $emailContent .= "<p><strong>Preferred Date:</strong> $date</p>";
}
if ($message) {
    $emailContent .= "<p><strong>Message/Requirements:</strong><br>$message</p>";
}

$mail->Body    = $emailContent;
$mail->AltBody = strip_tags($emailContent);

if(!$mail->send()) {
    echo json_encode(['status' => 'error', 'message' => 'Message could not be sent. Mailer Error: ' . $mail->ErrorInfo]);
} else {
    echo json_encode(['status' => 'success', 'message' => 'Message has been sent']);
}
?>
