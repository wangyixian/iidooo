/**
 * Created by Ethan on 16/5/13.
 */

var HeaderActions = Reflux.createActions(['logout']);

var HeaderStore = Reflux.createStore({
    listenables: [HeaderActions],
    onLogout: function (data) {
    },
});

var Header = React.createClass({displayName: "Header",
    getInitialState: function () {
        return {
            user: {}
        };
    },
    componentDidMount: function () {
        $("#mainMenu li a").click(function(event) { //绑定按钮的单击事件
            var index=this.title //取得点击按钮的title属性，这里就是按钮的数字
            var id='#'+index //取得需要跳转到的DIV的ID
            $("html,body").animate({scrollTop: $(id).offset().top}, 1000); //一秒跳转到该ID的位置
        });
    },
    render: function () {
        return (
            React.createElement("header", null, 
                React.createElement("nav", {className: "navbar navbar-fixed-top"}, 
                    React.createElement("div", {className: "container-fluid"}, 
                        React.createElement("div", {className: "navbar-header"}, 
                            React.createElement("button", {type: "button", className: "navbar-toggle collapsed", "data-toggle": "collapse", 
                                    "data-target": "#bs-example-navbar-collapse-1", "aria-expanded": "false"}, 
                                React.createElement("span", {className: "sr-only"}), 
                                React.createElement("span", {className: "icon-bar"}), 
                                React.createElement("span", {className: "icon-bar"}), 
                                React.createElement("span", {className: "icon-bar"})
                            ), 
                            React.createElement("a", {className: "navbar-brand", href: "#"}, "上海轶度网络科技有限公司")
                        ), 
                        React.createElement("div", {className: "collapse navbar-collapse"}, 
                            React.createElement("ul", {id: "mainMenu", className: "nav navbar-nav navbar-right"}, 
                                React.createElement("li", null, React.createElement("a", {href: "javascript:void(0)", title: "slide1"}, 
                                    React.createElement("span", null, "首页"), 
                                    React.createElement("i", {className: "underline"})
                                )
                                ), 
                                React.createElement("li", null, React.createElement("a", {href: "javascript:void(0)", title: "slide2"}, 
                                    React.createElement("span", null, "解决方案"), 
                                    React.createElement("i", {className: "underline"})
                                )
                                ), 
                                React.createElement("li", null, React.createElement("a", {href: "javascript:void(0)", title: "slide3"}, 
                                    React.createElement("span", null, "关于我们"), 
                                    React.createElement("i", {className: "underline"})
                                )
                                )
                            )
                        )
                    )
                )
            )
        );
    }
});

var LOGO = React.createClass({displayName: "LOGO",
    render: function () {
        return (
            React.createElement("div", null, 
                React.createElement("a", {href: SiteProperties.clientURL + Page.Index}, "上海轶度网络科技有限公司")
            )
        );
    }
});