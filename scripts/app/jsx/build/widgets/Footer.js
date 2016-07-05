/**
 * Created by Ethan on 16/5/13.
 */
var Footer = React.createClass({displayName: "Footer",
    render: function () {
        return (
            React.createElement("footer", {className: "footer"}, 
                React.createElement("div", {className: "container text-center"}, 
                    React.createElement("p", {className: "text-muted"}, "上海轶度网络科技有限公司 版权所有"), 
                    React.createElement("p", {className: "text-muted"}, "Copyright © Since 2014 Shanghai I.DO Net Tech Co., LTD. All" + ' ' +
                        "Rights Reserved."), 
                    React.createElement("p", {className: "text-muted"}, "沪ICP备13026350号")
                )
            )
        );
    }
});