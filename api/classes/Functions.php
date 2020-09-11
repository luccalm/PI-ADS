<?

namespace Geral;

use Psr\Container\ContainerInterface;
use \Exception;

class Functions {

    private $container;

    public function __construct(ContainerInterface $container) {
            $this->container = $container;
    }

}

?>