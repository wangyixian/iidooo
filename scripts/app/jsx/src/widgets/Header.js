/**
 * Created by Ethan on 16/5/13.
 */

var HeaderActions = Reflux.createActions(['logout']);

var HeaderStore = Reflux.createStore({
    listenables: [HeaderActions],
    onLogout: function (data) {
    },
});

var Header = React.createClass({
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
            <header>
                <nav className="navbar navbar-fixed-top">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                                    data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                <span className="sr-only"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="#">上海轶度网络科技有限公司</a>
                        </div>
                        <div className="collapse navbar-collapse">
                            <ul id="mainMenu" className="nav navbar-nav navbar-right">
                                <li><a href="javascript:void(0)" title="slide1">
                                    <span>首页</span>
                                    <i className="underline"></i>
                                </a>
                                </li>
                                <li><a href="javascript:void(0)" title="slide2">
                                    <span>解决方案</span>
                                    <i className="underline"></i>
                                </a>
                                </li>
                                <li><a href="javascript:void(0)" title="slide3">
                                    <span>关于我们</span>
                                    <i className="underline"></i>
                                </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
});

var LOGO = React.createClass({
    render: function () {
        return (
            <div>
                <a href={SiteProperties.clientURL + Page.Index}>上海轶度网络科技有限公司</a>
            </div>
        );
    }
});