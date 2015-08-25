<%@ page language="java" contentType="text/html; charset=UTF-8"  pageEncoding="UTF-8"%>
<%@ taglib prefix="cms" uri="/cms-api-tags"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<jsp:include page="include/Head.jsp"></jsp:include>
<link type="text/css" rel="stylesheet" href="/iidooo/css/Index.css">
<cms:metaInfo siteCode="iidooo" channelPath="index"/>
</head>
<body>
	<jsp:include page="include/Top.jsp"></jsp:include>
	<div class="main_menu_wrap">
		<cms:channelMenu siteCode="iidooo" channelPath="index" />
	</div>
	<div class="page_content_wrap">		
    	<div id="slide" class="slides">
			<ul class="slide-pic">
				<li style="display: list-item;" class="current">
					<a href="website/website.html" target="_self">
						<img alt="网站建设" src="/iidooo/img/index/slide_web.png">
					</a>
				</li>
				<li>
					<a href="customize/customize.html" target="_self">
						<img alt="软件定制"	src="/iidooo/img/index/slide_customize.png">
					</a>
				</li>
				<li>
					<a href="support/support.html" target="_self">
						<img alt="技术支持" src="/iidooo/img/index/slide_support.png">
					</a>
				</li>
			</ul>
			<ul class="slide-li op">
				<li class="current"></li>
				<li class=""></li>
				<li class=""></li>
			</ul>
			<ul class="slide-li slide-txt">
				<li class="current"><a href="website/website.html" target="_self">网站建设</a></li>
				<li class=""><a href="customize/customize.html" target="_self">软件定制</a></li>
				<li class=""><a href="support/support.html" target="_self">技术支持</a></li>
			</ul>
		</div>
		<div class="left_page_content_wrap">
			<cms:contentListBlock id="blogList" action="blogDetail" siteCode="iidooo" channelPath="blogList" isShowDate='true' title="最新博文"/>
			<cms:contentListBlock id="newsList" action="newsDetail" siteCode="iidooo" channelPath="newsList" isShowDate='true' title="最新新闻"/>
		</div>
		<div class="right_page_content_wrap">
			<div id="contact" class="block">
				<div class="block_title">联系我们</div>
				<div class="block_content">
					<div class="block_content_item">
						<span class="block_content_item_title">邮箱：</span>
						<span>service@iidooo.com</span>
					</div>
					<div class="block_content_item">
						<span class="block_content_item_title">QQ：</span>
						<span>191922675 小轶</span>
					</div>
					<div class="block_content_item">
						<span class="block_content_item_title">Skype：</span>
						<span>wang_yixian</span>
					</div>
					<div class="block_content_item">
						<span class="block_content_item_title">电话：</span>
						<span>13816867453</span>
					</div>					
					<div class="block_content_item">
						<img alt="微信公众号" src="/iidooo/img/index/wx_small.jpg">
					</div>
				</div>
			</div>
		</div>
	</div>
    <jsp:include page="include/Footer.jsp"></jsp:include>
    <script type="text/javascript" src="${CMS_URL}/js/slide_banner.js"></script>
</body>
</html>