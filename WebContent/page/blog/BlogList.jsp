<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags"%>
<%@ taglib prefix="core" uri="/core-api-tags"%>
<%@ taglib prefix="cms" uri="/cms-api-tags"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<jsp:include page="../include/Head.jsp"></jsp:include>
<link type="text/css" rel="stylesheet" href="/iidooo/css/blog/BlogList.css">
<cms:metaInfo siteCode="iidooo" channelPath="blogList" />
</head>
<body>
	<form id="form" action="" method="post">
		<jsp:include page="../include/Top.jsp"></jsp:include>
		<div class="main_menu_wrap">
			<cms:channelMenu siteCode="iidooo" channelPath="blogList" />
		</div>
		<div class="page_content_wrap">
			<div class="left_page_content_wrap">				
				<cms:channelListBlock siteCode="iidooo" isContainBlank="true" parentPath="blogList" id="blogTypeList" value="${content.channelPath}" onClick="searchByType('channelPath')" title="分类"/>
			</div>
			<div class="right_page_content_wrap">
				<cms:contentListBlock siteCode="iidooo" id="blogList" channelPath="blogList" action="blogDetail" isShowDate='true' title="博客一览"/>
			</div>
		</div>
		<jsp:include page="../include/Footer.jsp"></jsp:include>		
	</form>
</body>
</html>