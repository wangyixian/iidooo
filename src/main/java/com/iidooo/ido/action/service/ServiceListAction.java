package com.iidooo.ido.action.service;

import org.apache.log4j.Logger;

import com.iidooo.cms.api.action.SiteSupportAction;

public class ServiceListAction extends SiteSupportAction {
    /**
     * 
     */
    private static final long serialVersionUID = 1L;

    private static final Logger logger = Logger.getLogger(ServiceListAction.class);

    public String init() {
        try {
//            PageDto page = this.getPage();
//            if (page == null) {
//                page = new PageDto();
//                page.setPageSize(12);
//                this.setPage(page);
//            }
//            this.sendGetProductListAPI(IdoConstant.SITE_CODE, this.getActionName(), this.getProduct());
            return SUCCESS;
        } catch (Exception e) {
            e.printStackTrace();
            logger.fatal(e);
            return ERROR;
        }
    }

}
