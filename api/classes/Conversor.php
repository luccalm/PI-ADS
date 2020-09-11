<?

namespace Geral;

use Psr\Container\ContainerInterface;
use \Exception;
use \SplFileObject;

class Conversor {

    private $container;

    private $arrayMembers = ["Concurso", "Data", "1_Dezena", "2_Dezena", "3_Dezena", "4_Dezena","5_Dezena","6_Dezena", "Arrecadacao", "Ganhadores_Sena", "Cidade", "Valor_Mega", "Ganhadores_Quina", "Valor_Quina", "Ganhadores_Quadra", "Valor_Quadra", "Acumulado", "Valor_Acumulado", "Estimativa_Premio", "Acumulado_Mega_Virada"];

    public function __construct(ContainerInterface $container) {
            $this->container = $container;
    }

    public function convertToJson($request, $response, $args) {

 		$file = new SplFileObject('dadosInput/d_megasc.htm');
    	$firstLine = true;
    	$colunaSorteio = 0;
    	$arrFinal = Array();
    	$auxArray = Array();


    	while (!$file->eof()) {

    		$line = utf8_encode(strip_tags($file->fgets()));
    		$line = trim($line);
    		//Primeira linha é o header, não importa.
    		if($firstLine) {
    			$firstLine = false;
    			continue;
    		}

    		if($colunaSorteio > 19) {

    			$arrFinal[] = $auxArr;
    			unset($auxArray);
    			$auxArray = Array();
    			$auxArray['dezenas'] = null;
    			$colunaSorteio = 0;

    		}

    		if(empty($line) && $colunaSorteio < 5) { continue; }
    		
    		//TODO - Adicionar multiplas cidades no array de cidades;
    		if($colunaSorteio == 0 && preg_match('/[A-z][A-z]/', $line)) { continue; }


    		// if($colunaSorteio >= 2 && $colunaSorteio <= 7) {
    		// 	$auxArr['dezenas'][] = $line;
    		// 	$colunaSorteio++;
    		// 	continue;
    		// }
    		

    		$auxArr[$this->arrayMembers[$colunaSorteio]] = $line;
    		$colunaSorteio++;
		
		}

		print_r(json_encode($arrFinal));

    }

}

?>