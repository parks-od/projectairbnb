package com.example.airbnb.service.Lodging;

import com.example.airbnb.ifs.CrudInterface;
import com.example.airbnb.model.entity.lodging.*;
import com.example.airbnb.model.network.Header;
import com.example.airbnb.model.network.request.lodging.LodgingApiRequest;
import com.example.airbnb.model.network.request.lodging.LodgingPriceApiRequest;
import com.example.airbnb.model.network.request.lodging.LodgingRoomApiRequest;
import com.example.airbnb.model.network.response.lodging.LodgingApiResponse;
import com.example.airbnb.model.network.response.lodging.LodgingPriceApiResponse;
import com.example.airbnb.model.network.response.lodging.LodgingRoomApiResponse;
import com.example.airbnb.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class LodgingApiLogicService implements CrudInterface<LodgingApiRequest, LodgingApiResponse> {



    private final LodgingRepository lodgingRepository;
    private final LodgingIdrepository lodgingIdrepository;
    private final LodgingBeforeRepository lodgingBeforeRepository;
    private final LodgingDurationRepository lodgingDurationRepository;
    private final LodgingIsresvRepository lodgingIsresvRepository;
    private final LodgingLocationDetailRepository lodgingLocationDetailRepository;
    private final LodgingLocationRepository lodgingLocationRepository;
    private final LodgingPicturesRepository lodgingPicturesRepository;
    private final LodgingPolicyRepository lodgingPolicyRepository;
    private final LodgingPriceRepository lodgingPriceRepository;
    private final LodgingRequiresRepository lodgingRequiresRepository;
    private final LodgingRoleRepository lodgingRoleRepository;
    @Autowired
    private final LodgingRoomRepository lodgingRoomRepository;
    private final LodgingRulesRepository lodgingRulesRepository;
    private final LodgingWifiRepository lodgingWifiRepository;

    //숙소 및 객실
    private Header<LodgingRoomApiResponse> lodgingroom(LodgingRoom lodgingRoom){
        LodgingRoomApiResponse lodgingRoomApiResponse = LodgingRoomApiResponse.builder()
                .lodgingId(lodgingRoom.getLodgingId())
                .lodgingType1(lodgingRoom.getLodgingType1())
                .lodgingType2(lodgingRoom.getLodgingType2())
                .lodgingType3(lodgingRoom.getLodgingType3())
                .lodgingHigh(lodgingRoom.getLodgingHigh())
                .lodgingFloor(lodgingRoom.getLodgingFloor())
                .lodgingExtra(lodgingRoom.getLodgingExtra())
                .build();
        return Header.OK(lodgingRoomApiResponse);
    }
    //숙소 기본 정보
    private Header<LodgingApiResponse> lodging(Lodging lodging){
        LodgingApiResponse lodgingApiResponse = LodgingApiResponse.builder()
                .lodgingId(lodging.getLodgingId())
                .lodgingTitle(lodging.getLodgingTitle())
                .lodgingExplain(lodging.getLodgingExplain())
                .lodgingGuests(lodging.getLodgingGuests())
                .lodgingCovi(lodging.getLodgingCovi())
                .lodgingHref(lodging.getLodgingHref())
                .lodgingStatus(lodging.getLodgingStatus())
                .memId(lodging.getMemId())
                .build();
        return Header.OK(lodgingApiResponse);
    }

    // 요금 및 예약 가능 조정일
    private Header<LodgingPriceApiResponse> lodgingprice(LodgingPrice lodgingPrice){
        LodgingPriceApiResponse lodgingPriceApiResponse = LodgingPriceApiResponse.builder()
                .lodgingId(lodgingPrice.getLodgingId())
                .priceNormal(lodgingPrice.getPriceNormal())
                .priceMin(lodgingPrice.getPriceMin())
                .priceMax(lodgingPrice.getPriceMax())
                .priceTo(lodgingPrice.getPriceTo())
                .priceClean(lodgingPrice.getPriceClean())
                .priceCleanShort(lodgingPrice.getPriceCleanShort())
                .pricePet(lodgingPrice.getPricePet())
                .priceExtra(lodgingPrice.getPriceExtra())
                .priceWeekend(lodgingPrice.getPriceWeekend())
                .build();
        return Header.OK(lodgingPriceApiResponse);
    }

    // 숙소관리 아이디생성
    private Header<LodgingApiResponse> response1(Lodging lodging){
        LodgingApiResponse lodgingApiResponse = LodgingApiResponse.builder()
                .lodgingId(lodging.getLodgingId())
                .memId((lodging.getMemId()))
                .build();
        return Header.OK(lodgingApiResponse);
    }

    //---------------------------------------숙소등록시작---------------------------------------//

    // 테이블 lodgingId 생성
    @Override
    public Header<LodgingApiResponse> create(Header<LodgingApiRequest> request) {
        LodgingApiRequest lodgingApiRequest  = request.getData();
        Lodging lodging = Lodging.builder()
                .build();
        Lodging newLodging = lodgingIdrepository.save(lodging);
        System.out.println("lodging id :"+ newLodging.getLodgingId());
        LodgingBefore lodgingBefore = LodgingBefore.builder()
                .lodgingId(newLodging.getLodgingId())
                .build();
        LodgingDuration lodgingDuration = LodgingDuration.builder()
                .lodgingId(newLodging.getLodgingId())
                .build();
        LodgingIsresv lodgingIsresv = LodgingIsresv.builder()
                .lodgingId(newLodging.getLodgingId())
                .build();
        LodgingLocation lodgingLocation = LodgingLocation.builder()
                .lodgingId(newLodging.getLodgingId())
                .build();
        LodgingLocationDetail lodgingLocationDetail= LodgingLocationDetail.builder()
                .lodgingId(newLodging.getLodgingId())
                .build();
        LodgingPictures lodgingPictures = LodgingPictures.builder()
                .lodgingId(newLodging.getLodgingId())
                .build();
        LodgingPolicy lodgingPolicy = LodgingPolicy.builder()
                .lodgingId(newLodging.getLodgingId())
                .build();
        LodgingPrice lodgingPrice = LodgingPrice.builder()
                .lodgingId(newLodging.getLodgingId())
                .build();
        LodgingRequires lodgingRequires = LodgingRequires.builder()
                .lodgingId(newLodging.getLodgingId())
                .build();
        LodgingRole lodgingRole = LodgingRole.builder()
                .lodgingId(newLodging.getLodgingId())
                .build();
        LodgingRoom lodgingRoom = LodgingRoom.builder()
                .lodgingId(newLodging.getLodgingId())
                .build();
        LodgingRules lodgingRules = LodgingRules.builder()
                .lodgingId(newLodging.getLodgingId())
                .build();
        LodgingWifi lodgingWifi = LodgingWifi.builder()
                .lodgingId(newLodging.getLodgingId())
                .build();

        lodgingBeforeRepository.save(lodgingBefore);
        lodgingDurationRepository.save(lodgingDuration);
        lodgingIsresvRepository.save(lodgingIsresv);
        lodgingLocationRepository.save(lodgingLocation);
        lodgingLocationDetailRepository.save(lodgingLocationDetail);
        lodgingPicturesRepository.save(lodgingPictures);
        lodgingPolicyRepository.save(lodgingPolicy);
        lodgingPriceRepository.save(lodgingPrice);
        lodgingRequiresRepository.save(lodgingRequires);
        lodgingRoleRepository.save(lodgingRole);
        lodgingRoomRepository.save(lodgingRoom);
        lodgingRulesRepository.save(lodgingRules);
        lodgingWifiRepository.save(lodgingWifi);
        return response1(newLodging);
    }


    // 숙소 타입1
    public Header<LodgingRoomApiResponse> accommodationType1(Header<LodgingRoomApiRequest> request){
        LodgingRoomApiRequest lodgingRoomApiRequest  = request.getData();
        Optional<LodgingRoom> lodgingRoom = lodgingRoomRepository.findById(lodgingRoomApiRequest.getLodgingId());
        return lodgingRoom.map(
                lodgingRooms -> {
                    lodgingRooms.setLodgingType1(lodgingRoomApiRequest.getLodgingType1());
                    return lodgingRooms;
                }).map(lodgingRooms -> lodgingRoomRepository.save(lodgingRooms)).map(lodgingRooms -> lodgingroom(lodgingRooms))
                .orElseGet(() -> Header.ERROR("데이터 없음"));
    }
    // 숙소 타입2
    public Header<LodgingRoomApiResponse> accommodationType2(Header<LodgingRoomApiRequest> request){
        LodgingRoomApiRequest lodgingRoomApiRequest  = request.getData();
        Optional<LodgingRoom> lodgingRoom = lodgingRoomRepository.findById(lodgingRoomApiRequest.getLodgingId());
        return lodgingRoom.map(
                        lodgingRooms -> {
                            lodgingRooms.setLodgingType2(lodgingRoomApiRequest.getLodgingType2());
                            return lodgingRooms;
                        }).map(lodgingRooms -> lodgingRoomRepository.save(lodgingRooms)).map(lodgingRooms -> lodgingroom(lodgingRooms))
                .orElseGet(() -> Header.ERROR("데이터 없음"));
    }
    // 숙소 타입3
    public Header<LodgingRoomApiResponse> accommodationType3(Header<LodgingRoomApiRequest> request){
        LodgingRoomApiRequest lodgingRoomApiRequest  = request.getData();
        Optional<LodgingRoom> lodgingRoom = lodgingRoomRepository.findById(lodgingRoomApiRequest.getLodgingId());
        return lodgingRoom.map(
                        lodgingRooms -> {
                            lodgingRooms.setLodgingType3(lodgingRoomApiRequest.getLodgingType3());
                            return lodgingRooms;
                        }).map(lodgingRooms -> lodgingRoomRepository.save(lodgingRooms)).map(lodgingRooms -> lodgingroom(lodgingRooms))
                .orElseGet(() -> Header.ERROR("데이터 없음"));
    }

    // 게스트 수
    public Header<LodgingApiResponse> guestToWelcome(Header<LodgingApiRequest> request){
        LodgingApiRequest lodgingApiRequest  = request.getData();
        Optional<Lodging> lodging = lodgingRepository.findById(lodgingApiRequest.getLodgingId());
        return lodging.map(
                        lodgings -> {
                            lodgings.setLodgingGuests(lodgingApiRequest.getLodgingGuests());
                            return lodgings;
                        }).map(lodgings -> lodgingRepository.save(lodgings)).map(lodgings -> lodging(lodgings))
                .orElseGet(() -> Header.ERROR("데이터 없음"));
    }
    // 방 및 기타 공간
    public Header<LodgingRoomApiResponse> roomAndOtherSpaces(Header<LodgingRoomApiRequest> request){
        LodgingRoomApiRequest lodgingRoomApiRequest  = request.getData();
        Optional<LodgingRoom> lodgingRoom = lodgingRoomRepository.findById(lodgingRoomApiRequest.getLodgingId());
        return lodgingRoom.map(
                        lodgingRooms -> {
                            lodgingRooms.setLodgingExtra(lodgingRoomApiRequest.getLodgingExtra());
                            return lodgingRooms;
                        }).map(lodgingRooms -> lodgingRoomRepository.save(lodgingRooms)).map(lodgingRooms -> lodgingroom(lodgingRooms))
                .orElseGet(() -> Header.ERROR("데이터 없음"));
    }
    // 숙소 편의시설
    public Header<LodgingApiResponse> facilities(Header<LodgingApiRequest> request){
        LodgingApiRequest lodgingApiRequest  = request.getData();
        Optional<Lodging> lodging = lodgingRepository.findById(lodgingApiRequest.getLodgingId());
        return lodging.map(
                        lodgings -> {
                            lodgings.setLodgingCovi(lodgingApiRequest.getLodgingCovi());
                            return lodgings;
                        }).map(lodgings -> lodgingRepository.save(lodgings)).map(lodgings -> lodging(lodgings))
                .orElseGet(() -> Header.ERROR("데이터 없음"));
    }
    // 숙소 제목
    public Header<LodgingApiResponse> lodgingTitle(Header<LodgingApiRequest> request){
        LodgingApiRequest lodgingApiRequest  = request.getData();
        Optional<Lodging> lodging = lodgingRepository.findById(lodgingApiRequest.getLodgingId());
        return lodging.map(
                        lodgings -> {
                            lodgings.setLodgingTitle(lodgingApiRequest.getLodgingTitle());
                            return lodgings;
                        }).map(lodgings -> lodgingRepository.save(lodgings)).map(lodgings -> lodging(lodgings))
                .orElseGet(() -> Header.ERROR("데이터 없음"));
    }
    // 숙소 설명
    public Header<LodgingApiResponse> lodgingExplain(Header<LodgingApiRequest> request){
        LodgingApiRequest lodgingApiRequest  = request.getData();
        Optional<Lodging> lodging = lodgingRepository.findById(lodgingApiRequest.getLodgingId());
        return lodging.map(
                        lodgings -> {
                            lodgings.setLodgingExplain(lodgingApiRequest.getLodgingExplain());
                            return lodgings;
                        }).map(lodgings -> lodgingRepository.save(lodgings)).map(lodgings -> lodging(lodgings))
                .orElseGet(() -> Header.ERROR("데이터 없음"));
    }

    // 숙소 요금 지정
    public Header<LodgingPriceApiResponse> lodgingPrice(Header<LodgingPriceApiRequest> request){
        LodgingPriceApiRequest lodgingPriceApiRequest  = request.getData();
        Optional<LodgingPrice> lodgingPrice = lodgingPriceRepository.findById(lodgingPriceApiRequest.getLodgingId());
        return lodgingPrice.map(
                        lodgingPrices -> {
                            lodgingPrices.setPriceNormal(lodgingPriceApiRequest.getPriceNormal());
                            return lodgingPrices;
                        }).map(lodgingPrices -> lodgingPriceRepository.save(lodgingPrices)).map(lodgingPrices -> lodgingprice(lodgingPrices))
                .orElseGet(() -> Header.ERROR("데이터 없음"));
    }

    //---------------------------------------read---------------------------------------//

    public Header<LodgingApiResponse> LodgingRead(Long id) {
        return lodgingRepository.findById(id).map(lodging -> lodging(lodging)).orElseGet(() -> Header.ERROR("데이터 없음"));
    }
    public Header<LodgingRoomApiResponse> LodgingRoomRead(Long id) {
        return lodgingRoomRepository.findById(id).map(lodgingRoom -> lodgingroom(lodgingRoom)).orElseGet(() -> Header.ERROR("데이터 없음"));
    }




    //---------------------------------------read---------------------------------------//

    //---------------------------------------숙소등록 끝---------------------------------------//

    //---------------------------------------숙소 관리 시작---------------------------------------//









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
