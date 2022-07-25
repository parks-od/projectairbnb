package com.example.airbnb.service.member;


import com.example.airbnb.ifs.CrudInterface;
import com.example.airbnb.model.entity.member.Member;
import com.example.airbnb.model.network.Header;
import com.example.airbnb.model.network.request.member.MemberApiRequest;
import com.example.airbnb.model.network.response.member.MemberApiResponse;
import com.example.airbnb.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.awt.*;
import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.util.Calendar;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class MemberApiLogicService implements CrudInterface<MemberApiRequest, MemberApiResponse> {
     private final MemberRepository memberRepository;

    SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMdd");
    Calendar c1 = Calendar.getInstance();
    String strToday = sdf.format(c1.getTime());

    private Header<MemberApiResponse> response(Member member){
        MemberApiResponse memberApiResponse = MemberApiResponse.builder()
                .memId(member.getMemId())
                .memKnd("guest")
                .memName(member.getMemName())
                .memFirstname(member.getMemFirstname())
                .birth(member.getBirth())
                .email(member.getEmail())
                .memPw(member.getMemPw())
                .isLogshare(member.getIsLogshare())
                .build();
        return Header.OK(memberApiResponse);
    }


    @Override
    public Header<MemberApiResponse> create(Header<MemberApiRequest> request) {
        MemberApiRequest memberApiRequest = request.getData();
        Member member = Member.builder()
                .memKnd("guest")
                .memName(memberApiRequest.getMemName())
                .memFirstname(memberApiRequest.getMemFirstname())
                .birth(memberApiRequest.getBirth())
                .email(memberApiRequest.getEmail())
                .memPw(memberApiRequest.getMemPw())
                .isLogshare(memberApiRequest.getIsLogshare())
                .build();
        Member newUsers = memberRepository.save(member);
        return response(newUsers);
    }
    @Override
    public Header<MemberApiResponse> read(Long id) {
        return null;
    }

    public Header<MemberApiResponse> read(String email, String memPw) {
        System.out.println(memberRepository.findByEmailAndMemPw(email, memPw).map(users -> response(users))
                .orElseGet(()->Header.ERROR("데이터 없음")));
        return memberRepository.findByEmailAndMemPw(email, memPw).map(users -> response(users))
                .orElseGet(()->Header.ERROR("데이터 없음"));


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
