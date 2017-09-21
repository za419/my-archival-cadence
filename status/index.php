<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="description" content="Cadence Radio - An open source, commercial-free radio by Ken Ellorando " />
  <meta name="keywords" content="Cadence, Radio, Cadence Radio, CadenceRadio, free radio, open source radio, github, Ken Ellorando radio" />

  <title>Cadence Status</title>
  <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">

  <!-- OLD FONT: Permenant Marker
	Heading: Rock Salt; Subtitle: Roboto 300; All else: PT Sans -->
  <link href="https://fonts.googleapis.com/css?family=Rock+Salt" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Roboto:300i" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=PT+Sans" rel="stylesheet">

  <!-- jQuery Google CDN -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
</head>


<body onload="clock();">
  <div class="heading">
    <h1><a href="http://cadence.kenellorando.com">CADENCE</a></h1>
    <p class="subtitle">Service Status</p>
  </div>

  <!-- Clock -->
  <div id="heading-time">
    <div>Data as of Server Time:
      <?php
      date_default_timezone_set('America/Chicago');

      $timestamp = time();
      //$date_time = date("d-m-Y (D) H:i:s", $timestamp);
      $date_time = date("H:i:s", $timestamp);
      echo "$date_time";
      ?> (UTC-6)
    </div>
  </div>

  
  <!-- Music Server -->
  <p>Music Server Stream Port: </p>
  <div id='statusMusicStream'>
    <?php
       $fp = fsockopen("udp://198.37.25.185", 8000, $errno, $errstr);
       if (!$fp) {
            echo ("<div style ='color:#cc0000'> OFFLINE </div>");
       } else {
         echo ("<div style='color:#7CFC00'> ONLINE </div>");
       }
     ?>
  </div>

  <!-- Metadata Database -->
  <p>Metadata Database: </p>
  <div id="statusSongDatabase">
    <?php
        $host = 'localhost'; 
          $port = 2083; 
          $waitTimeoutInSeconds = 2; 
          if($fp = fsockopen($host,$port,$errCode,$errStr,$waitTimeoutInSeconds)){ 
            
             $servername = "localhost";
        // Query has permission only to select
        $username = "kenellor_query";
        $password = "query1";

        // Create connection
        $con = new mysqli($servername, $username, $password);

        // Check connection
        if ($con->connect_error) {
          // die("Failed " . $con->connect_error);
          echo("<div style ='color:#FF6347'> ONLINE  (QUERYING FAILED) </div>");
        } else {
          echo ("<div style='color:#7CFC00'> ONLINE </div>");
        }
            } else {
               echo ("<div style ='color:#cc0000'> OFFLINE </div>");
          } 
          fclose($fp);
      ?>
  </div>

  <!-- Webserver FTP -->
  <p>Webserver FTP: </p>
  <div id="statusWebserverFTP">
    <?php
          $host = 'localhost'; 
            $port = 21; 
            $waitTimeoutInSeconds = 2; 
            if($fp = fsockopen($host,$port,$errCode,$errStr,$waitTimeoutInSeconds)){   
               echo ("<div style='color:#7CFC00'> ONLINE </div>");
            } else {
               echo ("<div style ='color:#cc0000'> OFFLINE </div>");
            } 
            fclose($fp);
        ?>
  </div>
  
</body>

</html>
