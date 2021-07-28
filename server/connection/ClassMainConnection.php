<?php 
abstract class ClassMainConnection {
    protected function connectDB() {
        try {
            $Con = new PDO("mysql:host=localhost;dbname=waters","root","");
        return $Con;
        
        } catch(PDOException $Erro) {
            return $Erro->getMessage();
        }
    }
}