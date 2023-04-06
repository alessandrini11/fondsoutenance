<?php
namespace App\service;

use App\DTO\SmsResponse;
use Symfony\Contracts\HttpClient\Exception\ExceptionInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Contracts\HttpClient\HttpClientInterface;

class SmsService
{
    private HttpClientInterface $client;
    public function __construct(HttpClientInterface $client)
    {
        $this->client = $client;
    }
    public function sendSms(SmsResponse $to): bool
    {
        $sender_id ='GIT/TTIC';
        $destinataire = $to->phoneNumber;
        $message ="M/Mme {$to->fullName} votre contribution de {$to->amount}fcfa a été réçu";
        $login ='690469551';
        $password ='wamba';
        $ext_id='0123456';
        $time ='0';
        $dest='https://sms.etech-keys.com/ss/api.php?login='.$login.'&password='.urlencode($password).'&sender_id='.urlencode($sender_id);
        $html_brand = $dest.'&destinataire='.trim($destinataire).'&message='.urlencode($message).'&ext_id='.$ext_id.'&programmation='.$time;
        try {
            $response = $this->client->request(
                'POST',
                $html_brand,
                ['headers' => []]
            );
            if($response->getStatusCode() === Response::HTTP_OK){
                return true;
            } else {
                return false;
            }
        } catch (ExceptionInterface $exception) {
            dd($exception->getMessage());
        }
    }
}