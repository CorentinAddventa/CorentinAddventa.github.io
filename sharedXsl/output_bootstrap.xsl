<?xml version="1.0" encoding="iso-8859-1"?>
<xsl:stylesheet version="2.0"
 xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
 xmlns:y="http://www.yseop.com/engine/3"
 xmlns:yt="http://www.yseop.com/text/2">
<xsl:output method="html" encoding="ISO-8859-1" doctype-public="html" doctype-system="html"
/>
<!-- common Yseop -->
<xsl:include href="sharedXsl/html/commun-yseop-yt.xsl"/>
<xsl:include href="sharedXsl/html/commun-yseop-log.xsl"/>
<xsl:include href="sharedXsl/html/commun-helpers.xsl"/>
<!-- GENERAL -->
<xsl:template match="/">
<html>
	<head>
		<title>Page title</title>

    <script type="text/javascript">
      <xsl:call-template name="cssLoader" />
      loadCssArrayYseop([
      	// "css/output.css"
      ]);
      
      loadJsArrayYseop([
        // "scripts/otherScript.js"
      ]);
    </script>
    
	</head>
	<body>
    <xsl:apply-templates select="//y:txt[@id='finalDocument']" />
		<xsl:call-template name="log" />
	</body>
</html>
</xsl:template>

</xsl:stylesheet>
