<?php
namespace App\exception;

use Symfony\Component\HttpFoundation\Response;

class BadRequestException extends Exception
{
    public function __construct($message = 'Bad Request')
    {
        parent::__construct(Response::HTTP_BAD_REQUEST, $message);
    }
}