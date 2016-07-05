/**
 * Created by Ethan on 16/6/23.
 */

var Index = React.createClass({
    //componentDidMount: function () {
    //    $(".slide").css("height", window.innerHeight);
    //},
    render: function () {
        return (
            <div>
                <Slide1/>
                <Slide2/>
                <Slide3/>
                <Slide4/>
                <Footer/>
            </div>
        );
    }
});

var Slide1 = React.createClass({
    render: function () {
        return (
            <div id="slide1" data-slide="1" className="slide">
                <Header activeMenuID={"Index"}/>

                <div className="container">
                    <div className="col-sm-12">
                        <h1 className="slide-title">一站式互联网解决方案专家</h1>

                        <div className="margin-vertical-10">
                            <h4 className="font-size-24 ">
                                以［ 合作，共赢，Be Agile，Think Global ］为理念，
                            </h4>
                            <h4 className="font-size-24 ">为您提供优质的IT技术服务。</h4>
                        </div>
                        <br/>
                        <br/>
                    </div>
                    <div id="home-row-2" className="row padding-top-25">
                        <div className="col-sm-4">
                            <div className="home-hover navigation-slide">
                                <img src="../img/index/s02.png"/>
                            </div>
                            <span>PROFESSIONAL</span>
                        </div>
                        <div className="col-sm-4">
                            <div className="home-hover navigation-slide">
                                <img src="../img/index/s01.png"/>
                            </div>
                            <span>FRIENDLY</span>
                        </div>
                        <div className="col-sm-4">
                            <div className="home-hover navigation-slide">
                                <img src="../img/index/s03.png"/>
                            </div>
                            <span>SUITABLE</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

var Slide2 = React.createClass({
    render: function () {
        return (
            <div id="slide2" data-slide="2" className="slide">
                <div className="container">
                    <div className="row slide-title-sm">
                        <div className="col-sm-12 font-thin">
                            这些都是我们擅长的
                        </div>
                    </div>
                    <div className="row line-row">
                        <div className="hr">&nbsp;</div>
                    </div>
                    <div className="row slide-subtitle">
                        <div className="font-thin">但又不局限于此</div>
                    </div>
                    <div className="row content-row">
                        <div className="col-lg-3 col-sm-6">
                            <p><i className="fa fa-eye fa-5x" aria-hidden="true"></i></p>

                            <h2 className="font-thin">视觉设计</h2>
                            <h4 className="font-thin">交互原型设计 / UI界面设计</h4>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <p><i className="fa fa-laptop fa-5x" aria-hidden="true"></i></p>

                            <h2 className="font-thin">响应式网站</h2>
                            <h4 className="font-thin">一个网站，多种尺寸终端适配</h4>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <p><i className="fa fa-tablet fa-5x" aria-hidden="true"></i></p>

                            <h2 className="font-thin">移动 Apps</h2>
                            <h4 className="font-thin">IOS / Android / 微信推广</h4>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <p><i className="fa fa-pencil fa-5x" aria-hidden="true"></i></p>

                            <h2 className="font-semibold">系统定制开发</h2>
                            <h4 className="font-thin">企业级应用需求分析、定制开发</h4>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});


var Slide3 = React.createClass({
    render: function () {
        return (
            <div id="slide3" data-slide="3">
                <div className="container">
                    <div className="row slide-title-sm">
                        <div className="col-sm-12 font-thin">
                            公司介绍
                        </div>
                    </div>
                    <div className="row content-row">
                        <div className="col-lg-4 col-sm-6">
                            <p><i className="fa fa-map-marker fa-4x" aria-hidden="true"></i></p>

                            <h2 className="font-thin">公司所在地</h2>
                            <h4 className="font-thin">上海市宝山区大华路301弄601室</h4>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <p><i className="fa fa-calendar-check-o fa-4x" aria-hidden="true"></i></p>

                            <h2 className="font-thin">成立日</h2>
                            <h4 className="font-thin">2014年9月5日</h4>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <p><i className="fa fa-money fa-4x" aria-hidden="true"></i></p>

                            <h2 className="font-thin">注册资金</h2>
                            <h4 className="font-thin">1,000,000 人民币</h4>
                        </div>
                    </div>
                    <div className="row content-row padding-top-50">
                        <div className="col-lg-4 col-sm-6">
                            <p><i className="fa fa-user fa-4x" aria-hidden="true"></i></p>

                            <h2 className="font-thin">法人</h2>
                            <h4 className="font-thin">总经理 王 轶贤</h4>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <p><i className="fa fa-phone fa-4x" aria-hidden="true"></i></p>

                            <h2 className="font-thin">联系电话</h2>
                            <h4 className="font-thin">+86 13816867453</h4>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <p><i className="fa fa-envelope fa-4x" aria-hidden="true"></i></p>

                            <h2 className="font-thin">邮件联系</h2>
                            <h4 className="font-thin">service@iidooo.com</h4>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

var Slide4 = React.createClass({
    render: function () {
        return (
            <div id="slide4" data-slide="4" className="slide">
                <div className="container">
                    <div className="row slide-title-sm">
                        <div className="font-thin">
                            规范的流程控制是品质的保证
                        </div>
                    </div>
                    <div className="row line-row">
                        <div className="hr">&nbsp;</div>
                    </div>
                    <div className="row slide-subtitle">
                        <div className="font-thin">我们关注到每一个细节</div>
                    </div>
                </div>
            </div>
        );
    }
});

ReactDOM.render(
    <Index/>,
    document.getElementById('page')
);
