<?xml version="1.0" encoding="ISO-8859-1"?>
<xsl:stylesheet version="2.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:y="http://www.yseop.com/engine/3" xmlns:yt="http://www.yseop.com/text/2">
	<xsl:output method="html" encoding="ISO-8859-1"/>
	<!-- commun Yseop -->
	<xsl:include href="sharedXsl/html/commun-yseop-yt.xsl"/>
	<xsl:include href="sharedXsl/html/commun-yseop-log.xsl"/>
	<xsl:include href="sharedXsl/html/commun-helpers.xsl"/>
	<!-- spécifique projet -->
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
				<title>Titre du document à générer</title>
				<style type="text/css" media="print">
				/*
				CSS spécifique inline pour l'édition
				*/
				</style>
				<style type="text/css" media="screen">
				/*
				CSS inline spécifique pour l'affichage à l'écran
				*/
				</style>
				<!-- lien vers une CSS commune à tous les médias -->
				<xsl:element name="link">
					<xsl:attribute name="rel">stylesheet</xsl:attribute>
					<xsl:attribute name="media">all</xsl:attribute>
					<xsl:attribute name="type">text/css</xsl:attribute>
					<xsl:attribute name="href">
						<xsl:value-of select="$pathToRoot"/>css/general.css</xsl:attribute>
				</xsl:element>
			</head>
			<body>
				<!-- appel à la génération du doc cible -->
				<xsl:call-template name="docCible"/>
				<div id="touteLaLog">
					<!-- appel à la XSL qui génère la log -->
					<xsl:call-template name="log"/>
				</div>
			</body>
		</html>
	</xsl:template>
</xsl:stylesheet>