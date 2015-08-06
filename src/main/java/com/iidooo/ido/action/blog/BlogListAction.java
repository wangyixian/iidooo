package com.iidooo.ido.action.blog;

import org.apache.log4j.Logger;

import com.iidooo.cms.api.action.SiteSupportAction;
import com.iidooo.core.dto.PageDto;
import com.iidooo.ido.constant.IdoConstant;

public class BlogListAction extends SiteSupportAction {
    /**
     * 
     */
    private static final long serialVersionUID = 1L;

    private static final Logger logger = Logger.getLogger(BlogListAction.class);
    
    public String init() {
        try {
//            PageDto page = this.getPage();
//            if (page == null) {
//                page = new PageDto();
//                page.setPageSize(10);
//                this.setPage(page);
//            }
//            this.sendGetContentListAPI(IdoConstant.SITE_CODE, this.getActionName());
            return SUCCESS;
        } catch (Exception e) {
            e.printStackTrace();
            logger.fatal(e);
            return ERROR;
        }
    }
}
