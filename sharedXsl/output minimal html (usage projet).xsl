<?xml version="1.0" encoding="ISO-8859-1"?>
<xsl:stylesheet version="2.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:y="http://www.yseop.com/engine/3" xmlns:yt="http://www.yseop.com/text/2">
	<xsl:output method="html" encoding="ISO-8859-1"/>
	<!-- commun Yseop -->
	<xsl:include href="sharedXsl/html/commun-yseop-yt.xsl"/>
	<xsl:include href="sharedXsl/html/commun-yseop-log.xsl"/>
	<xsl:include href="sharedXsl/html/commun-helpers.xsl"/>
	<!-- sp�cifique projet -->
	<xsl:variable name="pathToRoot">../../dialog/bp2l/</xsl:variable>
	<xsl:template name="docCible">
		<div id="docCible">
			<xsl:apply-templates select="//y:txt[@id='docCible']"/>
		</div>
	</xsl:template>
	<!-- COMMUN -->
	<xsl:template match="//y:txt[@id='docCible']/*/yt:title">
		<h1>
			<xsl:apply-templates/>
		</h1>
	</xsl:template>
	<!-- GENERAL -->
	<xsl:template match="/">
		<html>
			<head>
				<title>Titre du document � g�n�rer</title>
				<style type="text/css" media="print">
				/*
				CSS sp�cifique inline pour l'�dition
				*/
				</style>
				<style type="text/css" media="screen">
				/*
				CSS inline sp�cifique pour l'affichage � l'�cran
				*/
				</style>
				<!-- lien vers une CSS commune � tous les m�dias -->
				<xsl:element name="link">
					<xsl:attribute name="rel">stylesheet</xsl:attribute>
					<xsl:attribute name="media">all</xsl:attribute>
					<xsl:attribute name="type">text/css</xsl:attribute>
					<xsl:attribute name="href">
						<xsl:value-of select="$pathToRoot"/>css/general.css</xsl:attribute>
				</xsl:element>
			</head>
			<body>
				<!-- appel � la g�n�ration du doc cible -->
				<xsl:call-template name="docCible"/>
				<div id="touteLaLog">
					<!-- appel � la XSL qui g�n�re la log -->
					<xsl:call-template name="log"/>
				</div>
			</body>
		</html>
	</xsl:template>
</xsl:stylesheet>