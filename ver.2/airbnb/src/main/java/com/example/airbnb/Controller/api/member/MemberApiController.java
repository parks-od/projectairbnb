package com.example.airbnb.controller.api.member;


import com.example.airbnb.ifs.CrudInterface;
import com.example.airbnb.model.network.Header;
import com.example.airbnb.model.network.request.member.MemberApiRequest;
import com.example.airbnb.model.network.response.member.MemberApiResponse;
import com.example.airbnb.service.member.MemberApiLogicService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/user")
@RequiredArgsConstructor
public class MemberApiController implements CrudInterface<MemberApiRequest, MemberApiResponse> {

    private final MemberApiLogicService memberApiLogicService;

    //회원가입 파트 (/lib/js/loginPop.js)
    @Override
    @PostMapping("")
    public Header<MemberApiResponse> create(@RequestBody Header<MemberApiRequest> request) {
        return memberApiLogicService.create(request);
    }

    @Override
    public Header<MemberApiResponse> read(Long id) {
        return null;
    }

    @Override
    public Header<MemberApiResponse> update(Header<MemberApiRequest> request) {
        return null;
    }

    @Override
    public Header<MemberApiResponse> delete(Long id) {
        return null;
    }
}


