<?php

// Determine what the main URL you will be using to communicate with the API
// EXAMPLE - $proxyURL = "https://api.fortnitetracker.com/v1/profile/{$_GET['platform']}/{$_GET['player']}";
// $proxyURL = "http://api.brewerydb.com/v2/beer/random";
$proxyURL = $_GET["url"];

// OPTIONAL - Create a list of headers that API specfically needs for the request to be completed
$acceptableHeaders = [];

// Headers will be used as supplemental data before the main data is sent
header("Access-Control-Allow-Origin: *");                                   // Allows the client to receive data from the server
header("Access-Control-Allow-Headers: ". implode(',',$acceptableHeaders));  // Applies additional headers, as necessary

// Generates
$params = '';
foreach($_GET as $key=>$value){
    $params.=("&$key=".urlencode($value));
}

// Retrieves headers from client request and properly formats to be made through CURL
$headers = apache_request_headers();
$headerParams = [];
foreach($headers as $key=>$value){
    if(in_array($key, $acceptableHeaders)){
        $headerParams[] = "$key:$value";
    }
}

// Creates cURL resource
// Used to handle HTTP requests made through PHP
$curl = curl_init();

// Sets options for how the request will be made
curl_setopt_array($curl, array(
    CURLOPT_URL => "$proxyURL?$params", // Will make use of the proxyURL defined above and concatenates necessary querystring
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => "",
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 30,
    CURLOPT_SSL_VERIFYHOST => 0,
    CURLOPT_SSL_VERIFYPEER => 0,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => "GET", // Determines what type of HTTP request we are making
    CURLOPT_HTTPHEADER => $headerParams // If additional headers are required, will be set here
));

// Returns response or error from cURL
$response = curl_exec($curl);
$err = curl_error($curl);

// Outputs response or error
echo $err;
echo $response;

?>