package com.iidooo.ido.action.join;

import org.apache.log4j.Logger;

import com.iidooo.cms.api.action.SiteSupportAction;
import com.iidooo.ido.constant.IdoConstant;

public class JoinAction extends SiteSupportAction {

    /**
     * 
     */
    private static final long serialVersionUID = 1L;

    private static final Logger logger = Logger.getLogger(JoinAction.class);

    public String init() {
        try {
            
//            this.sendGetContentAPI(IdoConstant.SITE_CODE, this.getActionName());

            return SUCCESS;
        } catch (Exception e) {
            e.printStackTrace();
            logger.fatal(e);
            return ERROR;
        }
    }

}