package com.iidooo.ido.action.product;

import org.apache.log4j.Logger;

import com.iidooo.cms.api.action.SiteSupportAction;
import com.iidooo.cms.dto.extend.ContentDto;
import com.iidooo.ido.constant.IdoConstant;

public class ProductDetailAction extends SiteSupportAction {
    
    /**
     * 
     */
    private static final long serialVersionUID = 1L;

    private static final Logger logger = Logger.getLogger(ProductDetailAction.class);

    public String init() {
        try {            
            ContentDto content = this.getContent();
            if (content == null || content.getContentID() == null) {
                this.sendGetContentAPI(IdoConstant.SITE_CODE, this.getActionName());
            } else {
                this.sendGetContentAPI(content.getContentID());
            }
            
            return SUCCESS;
        } catch (Exception e) {
            e.printStackTrace();
            logger.fatal(e);
            return ERROR;
        }
    }
}
