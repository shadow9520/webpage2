<?php
    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        $verify = true;
        if ($pposttest){
          
          if ($pwordpost == getenv($unamepost)){
            $verify = true;
          }else{
            $verify = false;
          }
        }
        if($verify){
          $name = "database";
          $file_name = $name . '.json';
          $file = 'filename';
          file_put_contents($file, $_POST['params']);        
?>