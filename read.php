<!DOCTYPE html>

<head>
    <title>代码信息</title>
</head>
<body>
  <h1>发现代码:</h1>
  <pre id='code'>
<?php
$queryString = $_SERVER['QUERY_STRING'];
parse_str($queryString, $queryParams);
$code = $queryParams->code;
$refer = $queeyParams->return;
if (strpos($url, "http://") === 0 || strpos($url, "https://") === 0) {
    echo file_get_contents($code);
} else {
   echo $code;
}
?>
 </pre>
<button onclick='navigator.clipboard.writeText(document.getElementById("code")); var a=document.createElement("a");
a.href="<?php echo $refer; ?>"; a.click();'>复制并返回</button>
</body>
