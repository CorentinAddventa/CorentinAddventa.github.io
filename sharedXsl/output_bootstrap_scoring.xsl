<?xml version="1.0" encoding="iso-8859-1"?>
<xsl:stylesheet version="2.0" 
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:y="http://www.yseop.com/engine/3"
  xmlns:yt="http://www.yseop.com/text/2">

<xsl:output 
  method="html"
  encoding="ISO-8859-1" 
/>

<!-- Yseop standard -->

<xsl:include href="sharedXsl/html/commun-yseop-yt.xsl"/>
<xsl:include href="sharedXsl/html/commun-yseop-log.xsl"/>
<xsl:include href="sharedXsl/html/commun-helpers.xsl"/>

<xsl:include href="sharedXsl/html/scoring.xsl"/>


<!-- project specific -->

<xsl:template name="scoringResults">
  <a name="scoringResults">
    <h1>Scoring results<a href="#top">back</a> </h1>
  </a>  
  <xsl:call-template name="scoring" />
</xsl:template>


<xsl:template name="propositions">

  <a name="propositions">
    <h1>Propositions <a href="#top">back</a> </h1>
  </a>

  <xsl:apply-templates select="//y:txt[@id='finalDocument']" />

</xsl:template>

<xsl:template match="yt:title" priority="1">
  <h2>
    <xsl:apply-templates />
  </h2>
</xsl:template>


<!-- GENERAL -->


<xsl:template match="/">
<html>
  <head>
    <title>
      Propositions
    </title>
    
    <script type="text/javascript">
/*
could also use <link rel="stylesheet" type="text/css" href="..." /> but would require hard coded KB name
*/
<xsl:call-template name="cssLoader" />
loadCssArrayYseop([
	"sharedXsl/html/commun-yseop-log.css", 
	"sharedXsl/html/scoring.css"
]);
    </script>
    
    <style type="text/css" media="print">
#contentList, #theLog {
  display: none;
}   
    </style>
    
    <style type="text/css" media="all">
#responseType {
  color:red;
}
    </style>

  </head>

  
	<body>
    
    <div id="contentList">
      <a name="top"><h1>Content list</h1></a>
      <ul>      
        <li><a href="#propositions">Propositions</a></li>
        <li><a href="#scoringResults">Scoring results</a></li>
        <li><a href="#log">Log</a></li>
      </ul>
    </div>

    <xsl:choose>
      <xsl:when test="//typeReponse = 'TR_OK'">
        <!-- nothing -->
      </xsl:when>      
      <xsl:when test="//typeReponse = 'TR_ERROR'">
        <h1>ERROR</h1>
      </xsl:when>
      <xsl:otherwise>
        <b><xsl:value-of select="//typeReponse" /></b>  
      </xsl:otherwise>
    </xsl:choose>

    <div id="responseType"><xsl:value-of select="//libelleTypeReponse" /></div>  
    
    <xsl:call-template name="propositions" />
    
    <xsl:call-template name="scoringResults" />
    
    
    <div id="theLog">
      <xsl:call-template name="log" />
    </div>
		
	</body>
</html>
</xsl:template>

</xsl:stylesheet>

