package com.iidooo.ido.action.service;

import org.apache.log4j.Logger;

import com.iidooo.cms.api.action.SiteSupportAction;

public class ServiceListAction extends SiteSupportAction {
    /**
     * 
     */
    private static final long serialVersionUID = 1L;

    private static final Logger logger = Logger.getLogger(ServiceDetailAction.class);

    public String init() {
        try {
            return SUCCESS;
        } catch (Exception e) {
            e.printStackTrace();
            logger.fatal(e);
            return ERROR;
        }
    }

}

