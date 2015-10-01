<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags"%>
<%@ taglib prefix="cms" uri="/cms-api-tags"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<jsp:include page="../include/Head.jsp"></jsp:include>
<link type="text/css" rel="stylesheet" href="${SITE_URL}/css/about/About.css">
<cms:metaInfo siteCode="iidooo" channelPath="about" />
</head>
<body>
	<jsp:include page="../include/Top.jsp"></jsp:include>
	<div class="main_menu_wrap">
		<cms:channelMenu siteCode="iidooo" channelPath="about" />
	</div>
	<div class="page_content_wrap">
		<div class="left_page_content_wrap">
			<cms:contentListBlock id="about" action="about" siteCode="iidooo" channelPath="about" value="${content.contentID }" title="关于我们"/>
		</div>
		<div class="right_page_content_wrap">
			<div class="block">
				<div class="block_title">${content.contentTitle }</div>
				<div>${content.contentBody }</div>
			</div>
		</div>
	</div>
	<jsp:include page="../include/Footer.jsp"></jsp:include>
</body>
</html>