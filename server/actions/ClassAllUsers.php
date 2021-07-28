<?php
include("../connection/ClassMainConnection.php");

class ClassAllUsers extends ClassMainConnection {
    public function getAllUsers() {
        $BFetch = $this->connectDB()->prepare("SELECT * FROM  waters_all_users");
        $BFetch->execute();

        $J = [];
        $I = 0;

        while($Fetch = $BFetch->fetch(PDO::FETCH_ASSOC)) {
            $J[$I] = [
                "id" => $Fetch['id'],
                "id_user" => $Fetch['id_user'],
                "password" => $Fetch['password'],
                "first_name" => $Fetch['first_name'],
                "last_name" => $Fetch['last_name'],
            ];

            $I++;
        }

        header("Access-Control-Allow-Origin: *");
        header("content-type: application/json");

        echo json_encode($J);
    }
}