<?xml version="1.0" encoding="iso-8859-1"?>
<xsl:stylesheet version="2.0"
 xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
 xmlns:y="http://www.yseop.com/engine/3"
 xmlns:yt="http://www.yseop.com/text/2">
<xsl:output method="html" encoding="ISO-8859-1" doctype-public="-//W3C//DTD HTML 4.01//EN" doctype-system="http://www.w3.org/TR/html4/strict.dtd"/>
<!-- common Yseop -->
<xsl:include href="commun-yseop-yt.xsl"/>
<xsl:include href="../sharedXsl/html/commun-yseop-log.xsl"/>
<xsl:include href="../sharedXsl/html/commun-helpers.xsl"/>
<!-- GENERAL -->
<xsl:template match="/">
        <html>
        <head>
            <link rel="stylesheet" type="text/css" href="css/output.css" />
        </head>
		<div>
			<xsl:apply-templates select="//y:txt[@id='finalDocument']" />
			
		</div>
        <!--div id="logsContainer">
					<xsl:apply-templates select="/y:output/y:data-end/y:logging/y:log"/>
				</div-->
		</html>
</xsl:template>
</xsl:stylesheet>