<?php

// header('Access-Control-Allow-Origin: *');
// header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
// ini_set('display_errors', 1);
// ini_set('display_startup_errors', 1);
// error_reporting(E_ALL);

date_default_timezone_set('America/Sao_Paulo');

require 'vendor/autoload.php';

use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;
use Slim\Views\PhpRenderer;
use \Interop\Container\ContainerInterface as ContainerInterface;
use Slim\Container;
use Geral\Functions as Functions;
//-------------------------------------

$config['displayErrorDetails'] = true;
$config['addContentLengthHeader'] = false;

$app = new \Slim\App(["settings" => $config]);

$container = $app->getContainer();

$container['notAllowedHandler'] = function ($c) {
    return function ($request, $response, $exception) use ($c) {
        $arr['status'] = 0;
        $arr['retorno'] = null;
        $arr['msg'] = "Invalid Method.";
        $arr['code'] = "-XEAS5";
        return $response->withJSON($arr, 405);
    };
};


$container['errorHandler'] = function ($c) {
    return function ($request, $response, $exception) use ($c) {
        $arr['status'] = 0;
        $arr['retorno'] = null;
        $arr['msg'] = $exception->getMessage();
        $arr['code'] = $exception->getCode();
        // Functions::gravarLog('errorLog.dat', $exception->getMessage());
        return $response->withJSON($arr, 200);
    };
};

$container['notFoundHandler'] = function ($c) {
    return function ($request, $response) use ($c) {
        $arr['status'] = 0;
        $arr['retorno'] = null;
        $arr['msg'] = '[Invalid Call x41495]';
        $arr['code'] = -1;
        return $response->withJSON($arr, 404);
    };
};


//Rotas Site
include 'routes/route_website.php';


$app->run();
?>
