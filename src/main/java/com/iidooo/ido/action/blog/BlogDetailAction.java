package com.iidooo.ido.action.blog;

import org.apache.log4j.Logger;

import com.iidooo.cms.api.action.SiteSupportAction;

public class BlogDetailAction extends SiteSupportAction {
    /**
     * 
     */
    private static final long serialVersionUID = 1L;

    private static final Logger logger = Logger.getLogger(BlogDetailAction.class);

    public String init() {
        try {
//            this.sendGetContentAPI(this.getContent().getContentID());
            return SUCCESS;
        } catch (Exception e) {
            e.printStackTrace();
            logger.fatal(e);
            return ERROR;
        }
    }
}
