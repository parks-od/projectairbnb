package com.example.airbnb.controller.api.lodging;

import com.example.airbnb.model.network.response.lodging.LodgingApiResponse;
import com.example.airbnb.service.lodging.LodgingService;
import com.github.pagehelper.PageInfo;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/list")
@RequiredArgsConstructor
public class LodgingRoomApiController{
    private final LodgingService lodgingService;
    @RequestMapping("/main")
    public PageInfo<LodgingApiResponse> findCondition(@RequestParam(value = "tab_id") String tabId,
                                                      @RequestParam(value = "pages", required = false, defaultValue = "0") int pages,
                                                                    @RequestParam(value = "price_min", required = false, defaultValue = "0") Integer priceMin,
                                                                    @RequestParam(value = "price_max", required = false, defaultValue = "100000000") Integer priceMax,
                                                                    @RequestParam(value = "category", required = false, defaultValue = "") String category,
                                                                    @RequestParam(value = "roomType", required = false) String roomType,
                                                                    @RequestParam(value = "propertyTypes", required = false) String propertyTypes,
                                                                    @RequestParam(value = "min_bedrooms", required = false, defaultValue = "0") int minbedrooms,
                                                                    @RequestParam(value = "min_beds", required = false, defaultValue = "0") int minbeds,
                                                                    @RequestParam(value = "convi", required = false) String convi){
        PageInfo<LodgingApiResponse> p = new PageInfo<>(lodgingService.findCondition(pages,tabId,priceMin,priceMax
                ,category,propertyTypes,roomType,minbedrooms,minbeds,convi),10);
        return p;
    }
}
