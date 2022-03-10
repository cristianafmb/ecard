<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers:
{$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

if (isset($_POST)) {
    $mail = new PHPMailer(TRUE);

    $username = $_POST['name'];
    $useremail = $_POST['email'];
    $userphone = $_POST['contact'];
    $usercompany = $_POST['company'];
    $usermessage = $_POST['message'];
    try {
        if (!filter_var($useremail, FILTER_VALIDATE_EMAIL)) {
            echo 'Email inválido.';
            exit;
        }
        // Server settings
        $mail->IsSMTP();
        $mail->Host = "mail.invisual.pt";
        $mail->SMTPAuth = true;
        $mail->SMTPSecure = "ssl";
        $mail->Port = 465;
        $mail->Username = "cristiana.baiorte@invisual.pt";
        $mail->Password = "srX@K@lmOP?Y";

        // Recipients
        $mail->setFrom('noreply@invisual.pt', 'noreply');
        //$mail->addAddress('geral@invisual.pt', 'Contacto do website');
        $mail->addAddress('cristiana.baiorte@invisual.pt', 'Contacto do website');
        $mail->addReplyTo($useremail, $username);

        // Content
        $mail->CharSet = 'UTF-8';
        $mail->isHTML(true);
        $mail->WordWrap = 50;
        $mail->Subject = "Pedido de contacto pelo website por {$username} | Enomac";
        $mail->Body =

            '<!DOCTYPE html>
            <html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width,initial-scale=1">
                <meta name="x-apple-disable-message-reformatting">
                <title></title>
                <style>
                   
                </style>
                <body style=" margin:2rem; padding:0; font-family: Montserrat; font-size: 13px;">
                    <table style="margin-bottom: 30px">
                        <tr>
                            <td>
                                <img src="https://invisual.pt/teste-form/logo.png" alt="Enomac" name="Enomac" usemap="#logo_inbranding" width="250" height="60" id="logo" border="0" align="bottom" />
                            </td>
                        </tr>
                    </table>
            
                    <table role="presentation" style="width:800px;border-collapse:collapse;border:0;border-spacing:0;background:#ffffff;">
                        <tr>
                            <td align="left" style="padding:0; font-size: 20px; color:#F2AF00; font-weight: bold;">
                                Pedido De Contacto
                            </td>
                        </tr>
                        <tr>
                            <td align="left" style="padding:0; font-size: 16px; color:#F2AF00; ">
                                www.enomac.pt
                            </td>
                        </tr>
                    </table>
            
                    
                    <table role="presentation" style="margin-top: 30px; width:800px;border-collapse:collapse;border:0;border-spacing:0;background:#ffffff;">
                       
                        <tr>
                            <td align="left" style="padding-top: 15px;">
                                <table>
                                    <tr>
                                        <td style="width: 150px">
                                            <p style="font-size: 15px; color: #3e3e3e; ">' . $username . '</p>
                                        </td>
                                        <td >
                                            <p style="font-size: 13px; color:#F2AF00; font-style: italic;">  (Nome)</p> 
                                        </td>
                                    </tr>
                                </table>
                            </td>
                            <td align="left" style="padding-top: 15px;">
                                <table>
                                    <tr>
                                        <td style="width: 150px">
                                            <p style="font-size: 15px; color: #3e3e3e; ">' . $usercompany . '</p>
                                        </td>
                                        <td >
                                            <p style="font-size: 13px; color:#F2AF00; font-style: italic;">  (Empresa)</p> 
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td align="left" style="padding-top: 15px;">
                                <table>
                                    <tr>
                                        <td style="width: 150px">
                                            <p style="font-size: 15px; color: #3e3e3e; ">' . $useremail . '</p>
                                        </td>
                                        <td >
                                            <p style="font-size: 13px; color:#F2AF00; font-style: italic;">  (Email)</p> 
                                        </td>
                                    </tr>
                                </table>    
                            </td>
                            <td align="left" style="padding-top: 15px;">
                                <table>
                                    <tr>
                                        <td style="width: 150px">
                                            <p style="font-size: 15px; color: #3e3e3e; ">' . $userphone . '</p>
                                        </td>
                                        <td >
                                            <p style="font-size: 13px; color:#F2AF00; font-style: italic;">  (Telemóvel)</p> 
                                        </td>
                                    </tr>
                                </table>  
                            </td>
                        </tr>
                        <tr>
                            <td align="left" style="padding-top: 15px;">
                                <table>
                                    <tr>
                                        <td style="width: 150px">
                                            <p style="font-size: 15px; color: #3e3e3e; ">' . $usermessage . '</p>
                                        </td>
                                        <td >
                                            <p style="font-size: 13px; color:#F2AF00; font-style: italic;">  (Mensagem)</p> 
                                        </td>
                                    </tr>
                                </table>  
                            </td>
                            
                        </tr>
                    </table>
                </body>
            </head>
            </html>';
        $mail->send();
        echo 'success';
    } catch (Exception $e) {
        /* PHPMailer exception. */
        echo $e->errorMessage();
    } catch (\Exception $e) {
        /* PHP exception (note the backslash to select the global namespace Exception class). */
        echo $e->getMessage();
    }
}
