<?php
namespace App\exception;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\HttpException;

class Exception extends HttpException
{
    public function __construct(int $code = Response::HTTP_INTERNAL_SERVER_ERROR, $message = 'Internal Error')
    {
        parent::__construct($code, $message);
    }
}