package com.example.airbnb.controller.api.lodging;

import com.example.airbnb.ifs.CrudInterface;
import com.example.airbnb.model.network.Header;
import com.example.airbnb.model.network.request.lodging.LodgingApiRequest;
import com.example.airbnb.model.network.request.lodging.LodgingPriceApiRequest;
import com.example.airbnb.model.network.request.lodging.LodgingRoomApiRequest;
import com.example.airbnb.model.network.response.lodging.LodgingApiResponse;
import com.example.airbnb.model.network.response.lodging.LodgingPriceApiResponse;
import com.example.airbnb.model.network.response.lodging.LodgingRoomApiResponse;
import com.example.airbnb.service.Lodging.LodgingApiLogicService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/room")
@RequiredArgsConstructor
public class LodgingApiController implements CrudInterface<LodgingApiRequest, LodgingApiResponse> {

    private final LodgingApiLogicService lodgingApiLogicService;

    @Override
    @PostMapping ("")
    public Header<LodgingApiResponse> create(@RequestBody Header<LodgingApiRequest> request) {
        return lodgingApiLogicService.create(request);
    }
    // hostingOption1 API


    // hostingOption2 API
    @PostMapping("/hostoption2")
    public Header<LodgingRoomApiResponse> accommodationType1(@RequestBody Header<LodgingRoomApiRequest> request){
        return lodgingApiLogicService.accommodationType1(request);
    }
    // hostingOption3 API
    @PostMapping("/hostoption3")
    public Header<LodgingRoomApiResponse> accommodationType2(@RequestBody Header<LodgingRoomApiRequest> request){
        return lodgingApiLogicService.accommodationType2(request);
    }
    // hostingOption4 API
    @PostMapping("/hostoption4")
    public Header<LodgingRoomApiResponse> accommodationType3(@RequestBody Header<LodgingRoomApiRequest> request){
        return lodgingApiLogicService.accommodationType3(request);
    }
    // hostingOption7 API
    @PostMapping("/hostoption7")
    public Header<LodgingApiResponse> guestToWelcome(@RequestBody Header<LodgingApiRequest> request){
        return lodgingApiLogicService.guestToWelcome(request);
    }
    // hostingOption7 API
    @PostMapping("/hostoption7_1")
    public Header<LodgingRoomApiResponse> roomAndOtherSpaces(@RequestBody Header<LodgingRoomApiRequest> request){
        return lodgingApiLogicService.roomAndOtherSpaces(request);
    }
    // hostingOption8 API
    @PostMapping("/hostoption8")
    public Header<LodgingApiResponse> facilities(@RequestBody Header<LodgingApiRequest> request){
        return lodgingApiLogicService.facilities(request);
    }

    // hostingOption10 API
    @PostMapping("/hostoption10")
    public Header<LodgingApiResponse> lodgingTitle(@RequestBody Header<LodgingApiRequest> request){
        return lodgingApiLogicService.lodgingTitle(request);
    }
    // hostingOption12 API
    @PostMapping("/hostoption12")
    public Header<LodgingApiResponse> lodgingExplain(@RequestBody Header<LodgingApiRequest> request){
        return lodgingApiLogicService.lodgingExplain(request);
    }
    // hostingOption13 API
    @PostMapping("/hostoption13")
    public Header<LodgingPriceApiResponse> lodgingPrice(@RequestBody Header<LodgingPriceApiRequest> request){
        return lodgingApiLogicService.lodgingPrice(request);
    }

    // read //


    @Override
    public Header<LodgingApiResponse> read(Long id) {
        return null;
    }

    @Override
    public Header<LodgingApiResponse> update(Header<LodgingApiRequest> request) {
        return null;
    }

    @Override
    public Header<LodgingApiResponse> delete(Long id) {
        return null;
    }
}
