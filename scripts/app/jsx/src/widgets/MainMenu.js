/**
 * Created by Ethan on 16/6/23.
 */

var MainMenuActions = Reflux.createActions(['getChannelList']);

var MainMenuStore = Reflux.createStore({
    listenables: [MainMenuActions],
    onGetChannelList: function (data) {
        var url = SiteProperties.serverURL + API.getChannelList;
        data.appID = SecurityClient.appID;
        data.secret = SecurityClient.secret;
        data.siteCode = SiteProperties.siteCode;
        var self = this;
        var callback = function (result) {
            if (result.status == 200) {
                self.trigger(result.data);
            } else {
                console.log(result);
            }
        };

        ajaxPost(url, data, callback);
    }
});

var MainMenu = React.createClass({
    mixins: [Reflux.connect(MainMenuStore, 'channelList')],
    getInitialState: function () {
        return {
            channelList: []
        };
    },
    componentWillMount: function () {
        MainMenuActions.getChannelList(this.state);
    },
    componentDidUpdate: function () {
        var activeMenuID = this.props.activeMenuID;
        $("#" + activeMenuID).addClass("active");
    },
    render: function () {
        return (
            <ul id="mainMenu" className="nav navbar-nav navbar-right">
                {this.state.channelList.map(function (item) {
                    return <li id={item.channelPath} key={item.channelID} value={item.channelID}>
                        <a href={Page[item.channelPath]}>
                            <span>{item.channelName}</span>
                            <i className="underline"></i>
                        </a>
                    </li>
                })}
            </ul>
        );
    }
});