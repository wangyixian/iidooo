/**
 * Created by Ethan on 16/6/23.
 */

var Index = React.createClass({displayName: "Index",
    //componentDidMount: function () {
    //    $(".slide").css("height", window.innerHeight);
    //},
    render: function () {
        return (
            React.createElement("div", null, 
                React.createElement(Slide1, null), 
                React.createElement(Slide2, null), 
                React.createElement(Slide3, null), 
                React.createElement(Slide4, null), 
                React.createElement(Footer, null)
            )
        );
    }
});

var Slide1 = React.createClass({displayName: "Slide1",
    render: function () {
        return (
            React.createElement("div", {id: "slide1", "data-slide": "1", className: "slide"}, 
                React.createElement(Header, {activeMenuID: "Index"}), 

                React.createElement("div", {className: "container"}, 
                    React.createElement("div", {className: "col-sm-12"}, 
                        React.createElement("h1", {className: "slide-title"}, "一站式互联网解决方案专家"), 

                        React.createElement("div", {className: "margin-vertical-10"}, 
                            React.createElement("h4", {className: "font-size-24 "}, 
                                "以［ 合作，共赢，Be Agile，Think Global ］为理念，"
                            ), 
                            React.createElement("h4", {className: "font-size-24 "}, "为您提供优质的IT技术服务。")
                        ), 
                        React.createElement("br", null), 
                        React.createElement("br", null)
                    ), 
                    React.createElement("div", {id: "home-row-2", className: "row padding-top-25"}, 
                        React.createElement("div", {className: "col-sm-4"}, 
                            React.createElement("div", {className: "home-hover navigation-slide"}, 
                                React.createElement("img", {src: "../img/index/s02.png"})
                            ), 
                            React.createElement("span", null, "PROFESSIONAL")
                        ), 
                        React.createElement("div", {className: "col-sm-4"}, 
                            React.createElement("div", {className: "home-hover navigation-slide"}, 
                                React.createElement("img", {src: "../img/index/s01.png"})
                            ), 
                            React.createElement("span", null, "FRIENDLY")
                        ), 
                        React.createElement("div", {className: "col-sm-4"}, 
                            React.createElement("div", {className: "home-hover navigation-slide"}, 
                                React.createElement("img", {src: "../img/index/s03.png"})
                            ), 
                            React.createElement("span", null, "SUITABLE")
                        )
                    )
                )
            )
        );
    }
});

var Slide2 = React.createClass({displayName: "Slide2",
    render: function () {
        return (
            React.createElement("div", {id: "slide2", "data-slide": "2", className: "slide"}, 
                React.createElement("div", {className: "container"}, 
                    React.createElement("div", {className: "row slide-title-sm"}, 
                        React.createElement("div", {className: "col-sm-12 font-thin"}, 
                            "这些都是我们擅长的"
                        )
                    ), 
                    React.createElement("div", {className: "row line-row"}, 
                        React.createElement("div", {className: "hr"}, " ")
                    ), 
                    React.createElement("div", {className: "row slide-subtitle"}, 
                        React.createElement("div", {className: "font-thin"}, "但又不局限于此")
                    ), 
                    React.createElement("div", {className: "row content-row"}, 
                        React.createElement("div", {className: "col-lg-3 col-sm-6"}, 
                            React.createElement("p", null, React.createElement("i", {className: "fa fa-eye fa-5x", "aria-hidden": "true"})), 

                            React.createElement("h2", {className: "font-thin"}, "视觉设计"), 
                            React.createElement("h4", {className: "font-thin"}, "交互原型设计 / UI界面设计")
                        ), 
                        React.createElement("div", {className: "col-lg-3 col-sm-6"}, 
                            React.createElement("p", null, React.createElement("i", {className: "fa fa-laptop fa-5x", "aria-hidden": "true"})), 

                            React.createElement("h2", {className: "font-thin"}, "响应式网站"), 
                            React.createElement("h4", {className: "font-thin"}, "一个网站，多种尺寸终端适配")
                        ), 
                        React.createElement("div", {className: "col-lg-3 col-sm-6"}, 
                            React.createElement("p", null, React.createElement("i", {className: "fa fa-tablet fa-5x", "aria-hidden": "true"})), 

                            React.createElement("h2", {className: "font-thin"}, "移动 Apps"), 
                            React.createElement("h4", {className: "font-thin"}, "IOS / Android / 微信推广")
                        ), 
                        React.createElement("div", {className: "col-lg-3 col-sm-6"}, 
                            React.createElement("p", null, React.createElement("i", {className: "fa fa-pencil fa-5x", "aria-hidden": "true"})), 

                            React.createElement("h2", {className: "font-semibold"}, "系统定制开发"), 
                            React.createElement("h4", {className: "font-thin"}, "企业级应用需求分析、定制开发")
                        )
                    )
                )
            )
        );
    }
});


var Slide3 = React.createClass({displayName: "Slide3",
    render: function () {
        return (
            React.createElement("div", {id: "slide3", "data-slide": "3"}, 
                React.createElement("div", {className: "container"}, 
                    React.createElement("div", {className: "row slide-title-sm"}, 
                        React.createElement("div", {className: "col-sm-12 font-thin"}, 
                            "公司介绍"
                        )
                    ), 
                    React.createElement("div", {className: "row content-row"}, 
                        React.createElement("div", {className: "col-lg-4 col-sm-6"}, 
                            React.createElement("p", null, React.createElement("i", {className: "fa fa-map-marker fa-4x", "aria-hidden": "true"})), 

                            React.createElement("h2", {className: "font-thin"}, "公司所在地"), 
                            React.createElement("h4", {className: "font-thin"}, "上海市宝山区大华路301弄601室")
                        ), 
                        React.createElement("div", {className: "col-lg-4 col-sm-6"}, 
                            React.createElement("p", null, React.createElement("i", {className: "fa fa-calendar-check-o fa-4x", "aria-hidden": "true"})), 

                            React.createElement("h2", {className: "font-thin"}, "成立日"), 
                            React.createElement("h4", {className: "font-thin"}, "2014年9月5日")
                        ), 
                        React.createElement("div", {className: "col-lg-4 col-sm-6"}, 
                            React.createElement("p", null, React.createElement("i", {className: "fa fa-money fa-4x", "aria-hidden": "true"})), 

                            React.createElement("h2", {className: "font-thin"}, "注册资金"), 
                            React.createElement("h4", {className: "font-thin"}, "1,000,000 人民币")
                        )
                    ), 
                    React.createElement("div", {className: "row content-row padding-top-50"}, 
                        React.createElement("div", {className: "col-lg-4 col-sm-6"}, 
                            React.createElement("p", null, React.createElement("i", {className: "fa fa-user fa-4x", "aria-hidden": "true"})), 

                            React.createElement("h2", {className: "font-thin"}, "法人"), 
                            React.createElement("h4", {className: "font-thin"}, "总经理 王 轶贤")
                        ), 
                        React.createElement("div", {className: "col-lg-4 col-sm-6"}, 
                            React.createElement("p", null, React.createElement("i", {className: "fa fa-phone fa-4x", "aria-hidden": "true"})), 

                            React.createElement("h2", {className: "font-thin"}, "联系电话"), 
                            React.createElement("h4", {className: "font-thin"}, "+86 13816867453")
                        ), 
                        React.createElement("div", {className: "col-lg-4 col-sm-6"}, 
                            React.createElement("p", null, React.createElement("i", {className: "fa fa-envelope fa-4x", "aria-hidden": "true"})), 

                            React.createElement("h2", {className: "font-thin"}, "邮件联系"), 
                            React.createElement("h4", {className: "font-thin"}, "service@iidooo.com")
                        )
                    )
                )
            )
        );
    }
});

var Slide4 = React.createClass({displayName: "Slide4",
    render: function () {
        return (
            React.createElement("div", {id: "slide4", "data-slide": "4", className: "slide"}, 
                React.createElement("div", {className: "container"}, 
                    React.createElement("div", {className: "row slide-title-sm"}, 
                        React.createElement("div", {className: "font-thin"}, 
                            "规范的流程控制是品质的保证"
                        )
                    ), 
                    React.createElement("div", {className: "row line-row"}, 
                        React.createElement("div", {className: "hr"}, " ")
                    ), 
                    React.createElement("div", {className: "row slide-subtitle"}, 
                        React.createElement("div", {className: "font-thin"}, "我们关注到每一个细节")
                    )
                )
            )
        );
    }
});

ReactDOM.render(
    React.createElement(Index, null),
    document.getElementById('page')
);
