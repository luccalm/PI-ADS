<?

use Geral\Functions as Functions;
use Geral\Conversor as Conversor;
//------------------- Espetaculos -------------------  
$app->group('/conversor', function() use ($app) {
    $app->get('/toJSON', Conversor::class . ':convertToJson');
})


?>