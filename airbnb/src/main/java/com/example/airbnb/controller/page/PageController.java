package com.example.airbnb.controller.page;

import com.example.airbnb.model.entity.member.Member;
import com.example.airbnb.model.network.Header;
import com.example.airbnb.model.network.response.lodging.LodgingApiResponse;
import com.example.airbnb.model.network.response.lodging.LodgingRoomApiResponse;
import com.example.airbnb.model.network.response.member.*;
import com.example.airbnb.model.network.menu.LoginMenuService;
import com.example.airbnb.repository.member.MemberRepository;
import com.example.airbnb.service.Lodging.LodgingApiLogicService;
import com.example.airbnb.service.member.MemberApiLogicService;
import com.example.airbnb.model.network.menu.MemberMenuService;
import org.apache.commons.io.FilenameUtils;
import org.apache.commons.lang3.RandomStringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.io.File;
import java.io.IOException;
import java.io.RandomAccessFile;

@Controller
@RequestMapping("/pages") // http://localhost:9090/pages
public class PageController {
    @Autowired
    private MemberApiLogicService memberApiLogicService;

    @Autowired
    private MemberRepository memberRepository;
    @Autowired
    private LoginMenuService loginMenuService;
    @Autowired
    private MemberMenuService memberMenuService;
    @Autowired
    private LodgingApiLogicService lodgingApiLogicService;

    // -------------------------- 메인 -----------------------------------------//
    @RequestMapping(path = {""})
    public ModelAndView main(HttpServletRequest request) {
        HttpSession session = request.getSession(false);
        Long id = 0L;
        if (session == null) {
            return new ModelAndView("/pages/main").addObject("id", id).addObject("menuList", loginMenuService.getLoginMenu());
        } else {
            id = (Long) session.getAttribute("id");
            return new ModelAndView("/pages/main").addObject("id", id).addObject("menuList", memberMenuService.getMemberMenu());
        }
    }
    // -------------------------- #end 메인 -----------------------------------------//

    @RequestMapping(path = {"/wish"})
    public ModelAndView wish() {
        return new ModelAndView("/pages/wishlist/wishlist");
    }

    @RequestMapping(path = {"/travel"})
    public ModelAndView account() {
        return new ModelAndView("pages/user_travel/travel");
    }

    @RequestMapping(path = {"/help"})
    public ModelAndView help() {
        return new ModelAndView("pages/help/help");
    }

    @RequestMapping(path = {"/acc"})
    public ModelAndView acc() {
        return new ModelAndView("pages/accomm/accomm");
    }

    @RequestMapping(path = {"/tool1"})
    public ModelAndView tool1() {
        return new ModelAndView("pages/account/account_tools");
    }

    // -------------------------- 계정 비활성화#2 -----------------------------------------//
    @RequestMapping(path = {"/tool2"})
    public ModelAndView tool2(HttpServletRequest request) {
        HttpSession session = request.getSession(false);
        Long id = (Long) session.getAttribute("id");
        String email =  memberApiLogicService.read(id).getData().getEmail();
        return new ModelAndView("pages/account/account_tools1").addObject("email",email).addObject("id",id);
    }
    // -------------------------- #end 계정 비활성화#2 -----------------------------------------//
    @RequestMapping(path = {"/tool3"})
    public ModelAndView tool3() {
        return new ModelAndView("pages/account/account_tools2");
    }

    @RequestMapping(path = {"/hostfinish"})
    public ModelAndView hostfinish() {
        return new ModelAndView("pages/host_finish/host_finish");
    }

    @RequestMapping(path = {"room"})
    public ModelAndView room() {
        return new ModelAndView("/pages/room/roompage");
    }
    // -------------------------- 계정 메인 -----------------------------------------//
    @RequestMapping(path = {"account_main"})
    public ModelAndView account_main(HttpServletRequest request) {
        HttpSession session = request.getSession(false);
        Long id = (Long) session.getAttribute("id");
        String memFirstname = memberApiLogicService.read(id).getData().getMemFirstname();
        String memName = memberApiLogicService.read(id).getData().getMemName();
        String email = memberApiLogicService.read(id).getData().getEmail();
        return new ModelAndView("/pages/account/account_main").addObject("menuList", memberMenuService.getMemberMenu())
                .addObject("memFirstname", memFirstname)
                .addObject("memName", memName)
                .addObject("email", email);
    }
    // -------------------------- #end 계정 메인 -----------------------------------------//
    // -------------------------- 계정 알림 -----------------------------------------//
    @RequestMapping(path = {"account_alarm"})
    public ModelAndView account_alarm(HttpServletRequest request) {
        HttpSession session = request.getSession(false);
        Long id = (Long) session.getAttribute("id");
        MemNoticeApiResponse res1 = memberApiLogicService.readss(id).getData();
        return new ModelAndView("/pages/account/account_alarm").addObject("id", id).addObject("res1",res1);
    }
    // -------------------------- #end 계정 알림 -----------------------------------------//
    // -------------------------- 계정 글로벌 -----------------------------------------//
    @RequestMapping(path = {"account_global"})
    public ModelAndView account_global(HttpServletRequest request) {
        HttpSession session = request.getSession(false);
        Long id = (Long) session.getAttribute("id");
        MemGlobalApiResponse res1 = memberApiLogicService.readaa(id).getData();
        return new ModelAndView("/pages/account/account_global").addObject("id", id).addObject("res1",res1);
    }
    // -------------------------- #end 계정 글로벌 -----------------------------------------//
    // -------------------------- 계정 개인정보 업데이트 -----------------------------------------//
    @RequestMapping(path = {"account_info"})
    public ModelAndView account_info(HttpServletRequest request) {
        HttpSession session = request.getSession(false);
        Long id = (Long) session.getAttribute("id");
        MemberApiResponse res1 = memberApiLogicService.read(id).getData();
        MemInfoApiResponse res2 = memberApiLogicService.reads(id).getData();
//        System.out.println("res1 = "+res1);
//        System.out.println("res2 = "+res2);
        return new ModelAndView("/pages/account/account_info").addObject("res1", res1).addObject("res2", res2).addObject("id", id);
    }
    // -------------------------- #end 계정 개인정보 업데이트 -----------------------------------------//
    // -------------------------- 로그인 및 보안 -----------------------------------------//
    @RequestMapping(path = {"account_loginBoan"})
    public ModelAndView account_loginBoan(HttpServletRequest request) {
        HttpSession session = request.getSession(false);
        Long id = (Long) session.getAttribute("id");
        return new ModelAndView("/pages/account/host_login_boan").addObject("id", id);
    }
    // -------------------------- #end 로그인 및 보안 -----------------------------------------//
    // -------------------------- 결제 및 대금 수령 -----------------------------------------//
    @RequestMapping(path = {"account_pay1"})
    public ModelAndView account_pay1() {
        return new ModelAndView("/pages/account/account_pay1");
    }

    @RequestMapping(path = {"account_pay1_1"})
    public ModelAndView account_pay1_1() {
        return new ModelAndView("/pages/account/account_pay1-1");
    }

    @RequestMapping(path = {"account_pay2"})
    public ModelAndView account_pay2() {
        return new ModelAndView("/pages/account/account_pay2");
    }

    @RequestMapping(path = {"account_pay2_1"})
    public ModelAndView account_pay2_1() {
        return new ModelAndView("/pages/account/account_pay2-1");
    }

    @RequestMapping(path = {"account_pay3"})
    public ModelAndView account_pay3() {
        return new ModelAndView("/pages/account/account_pay3");
    }

    @RequestMapping(path = {"account_pay4"})
    public ModelAndView account_pay4(HttpServletRequest request){
        HttpSession session = request.getSession(false);
        Long id = (Long) session.getAttribute("id");
        return new ModelAndView("/pages/account/account_pay4").addObject("id",id);
    }
    // -------------------------- #end 결제 및 대금 수령 -----------------------------------------//
    // -------------------------- 개인정보 및 공개 설정 -----------------------------------------//
    @RequestMapping(path = {"account_privacy"})
    public ModelAndView account_privacy(HttpServletRequest request) {
        HttpSession session = request.getSession(false);
        Long id = (Long) session.getAttribute("id");
        MemSecurityApiResponse res1 = memberApiLogicService.readsa(id).getData();
        return new ModelAndView("/pages/account/account_privacy").addObject("id",id).addObject("res1",res1);
    }
    // -------------------------- #end 개인정보 및 공개 설정 -----------------------------------------//
    // -------------------------- 유저 프로필 -----------------------------------------//
    @RequestMapping(path = {"account_profile"})
    public ModelAndView account_profile(HttpServletRequest request) {
        HttpSession session = request.getSession(false);
        Long id = (Long) session.getAttribute("id");
        MemberApiResponse res1 = memberApiLogicService.read(id).getData();
        MemInfoApiResponse res2 = memberApiLogicService.reads(id).getData();
        System.out.println(res1);
        System.out.println(res2);
        return new ModelAndView("/pages/account/account_profile").addObject("res1",res1).addObject("res2",res2).addObject("id",id);
    }
    // -------------------------- #end 유저 프로필 -----------------------------------------//
    @RequestMapping(path = {"/edit-photo"})
    public ModelAndView editPhoto() {
        return new ModelAndView("pages/account/profileupdate");
    }
    /*host_after*/
    @RequestMapping("/host_done")    // http://localhost:9090/pages/host_done
    public ModelAndView hostDone() {
        return new ModelAndView("/pages/hosting/host_after/host_done");
    }

    @RequestMapping("/host_edit_Facilities")    // http://localhost:9090/pages/host_edit_Facilities
    public ModelAndView hostEditFacilities() {
        return new ModelAndView("/pages/hosting/host_after/host_edit_Facilities");
    }

    @RequestMapping("/host_edit_for_guests")    // http://localhost:9090/pages/host_edit_for_guests
    public ModelAndView hostEditForGuests() {
        return new ModelAndView("/pages/hosting/host_after/host_edit_for_guests");
    }

    @RequestMapping("/host_edit_hosts")    // http://localhost:9090/pages/host_edit_hosts
    public ModelAndView hostEditHosts() {
        return new ModelAndView("/pages/hosting/host_after/host_edit_hosts");
    }

    @RequestMapping("/host_edit_photos")    // http://localhost:9090/pages/host_edit_photos
    public ModelAndView hostEditPhotos() {
        return new ModelAndView("/pages/hosting/host_after/host_edit_photos");
    }

    @RequestMapping("/host_edit_pricing")    // http://localhost:9090/pages/host_done
    public ModelAndView hostEditPricing() {
        return new ModelAndView("/pages/hosting/host_after/host_edit_pricing");
    }

    @RequestMapping("/host_insite1")    // http://localhost:9090/pages/host_insite1
    public ModelAndView hostInsite1() {
        return new ModelAndView("/pages/hosting/host_after/host_insite1");
    }

    @RequestMapping("/host_insite2")    // http://localhost:9090/pages/host_insite2
    public ModelAndView hostInsite2() {
        return new ModelAndView("/pages/hosting/host_after/host_insite2");
    }

    @RequestMapping("/host_insite3")    // http://localhost:9090/pages/host_insite3
    public ModelAndView hostInsite3() {
        return new ModelAndView("/pages/hosting/host_after/host_insite3");
    }

    @RequestMapping("/host_insite4")    // http://localhost:9090/pages/host_insite4
    public ModelAndView hostInsite4() {
        return new ModelAndView("/pages/hosting/host_after/host_insite4");
    }

    @RequestMapping("/host_insite6")    // http://localhost:9090/pages/host_insite6
    public ModelAndView hostInsite6() {
        return new ModelAndView("/pages/hosting/host_after/host_insite6");
    }

    @RequestMapping("/hostedit")    // http://localhost:9090/pages/hostedit
    public ModelAndView hostEdit() {
        return new ModelAndView("/pages/hosting/host_after/hostedit");
    }

    @RequestMapping("/hosting_reservation")    // http://localhost:9090/pages/hosting_reservation
    public ModelAndView hostingReservation() {
        return new ModelAndView("/pages/hosting/host_after/hosting_reservation");
    }

    @RequestMapping("/lodging")    // http://localhost:9090/pages/lodging
    public ModelAndView lodging() {
        return new ModelAndView("/pages/hosting/host_after/lodging");
    }

    @RequestMapping("/policies")    // http://localhost:9090/pages/policies
    public ModelAndView policies() {
        return new ModelAndView("/pages/hosting/host_after/policies");
    }


    /*host_before*/
    @RequestMapping("/hostoption1")    // http://localhost:9090/pages/hostoption1
    public ModelAndView hostOption1() {
        return new ModelAndView("/pages/hosting/host_before/hostoption1");
    }

    @RequestMapping("/hostoption2")    // http://localhost:9090/pages/hostoption2
    public ModelAndView hostOption2() {
        return new ModelAndView("/pages/hosting/host_before/hostoption2");
    }

    @RequestMapping("/hostoption3")    // http://localhost:9090/pages/hostoption3
    public ModelAndView hostOption3() {
        return new ModelAndView("/pages/hosting/host_before/hostoption3");
    }

    @RequestMapping("/hostoption4")    // http://localhost:9090/pages/hostoption4
    public ModelAndView hostOption4() {
        return new ModelAndView("/pages/hosting/host_before/hostoption4");
    }

    @RequestMapping("/hostoption5")    // http://localhost:9090/pages/hostoption5
    public ModelAndView hostOption5() {
        return new ModelAndView("/pages/hosting/host_before/hostoption5");
    }

    @RequestMapping("/hostoption6")    // http://localhost:9090/pages/hostoption6
    public ModelAndView hostOption6() {
        return new ModelAndView("/pages/hosting/host_before/hostoption6");
    }

    @RequestMapping("/hostoption7")    // http://localhost:9090/pages/hostoption7
    public ModelAndView hostOption7() {
        return new ModelAndView("/pages/hosting/host_before/hostoption7");
    }

    @RequestMapping("/hostoption8")    // http://localhost:9090/pages/hostoption8
    public ModelAndView hostOption8() {
        return new ModelAndView("/pages/hosting/host_before/hostoption8");
    }

    @RequestMapping("/hostoption9")    // http://localhost:9090/pages/hostoption9
    public ModelAndView hostOption9() {
        return new ModelAndView("/pages/hosting/host_before/hostoption9");
    }

    @RequestMapping("/hostoption10")    // http://localhost:9090/pages/hostoption10
    public ModelAndView hostOption10() {
        return new ModelAndView("/pages/hosting/host_before/hostoption10");
    }

    @RequestMapping("/hostoption11")    // http://localhost:9090/pages/hostoption11
    public ModelAndView hostOption11() {
        return new ModelAndView("/pages/hosting/host_before/hostoption11");
    }

    @RequestMapping("/hostoption12")    // http://localhost:9090/pages/hostoption12
    public ModelAndView hostOption12() {
        return new ModelAndView("/pages/hosting/host_before/hostoption12");
    }

    @RequestMapping("/hostoption13")    // http://localhost:9090/pages/hostoption13
    public ModelAndView hostOption13() {
        return new ModelAndView("/pages/hosting/host_before/hostoption13");
    }

    @RequestMapping("/hostoption14")    // http://localhost:9090/pages/hostoption14
    public ModelAndView hostOption14() {
        return new ModelAndView("/pages/hosting/host_before/hostoption14");
    }

    //    // 세션 만들기
//    @PostMapping ("/hostoption1")
//    public ModelAndView loginOk() {
//            return new ModelAndView("/pages/hosting/host_before/hostoption1");
//    }

    @RequestMapping(path = {"hostoption15"})
    public ModelAndView hostoption15(HttpServletRequest request) {
        HttpSession session = request.getSession(false);
        Long id = (Long) session.getAttribute("id");
        LodgingApiResponse res1 = lodgingApiLogicService.LodgingRead(id).getData();
        LodgingRoomApiResponse res2 = lodgingApiLogicService.LodgingRoomRead(id).getData();
        System.out.println(res1);
        System.out.println(res2);
        return new ModelAndView("/pages/hosting/host_before/hostoption15").addObject("res1",res1).addObject("res2",res2).addObject("id",id);
    }

    @RequestMapping("/hostoption16")    // http://localhost:9090/pages/hostoption16
    public ModelAndView hostOption16() {
        return new ModelAndView("/pages/hosting/host_before/hostoption16");
    }

    @RequestMapping("/sub")    // http://localhost:9090/pages/sub
    public ModelAndView sub() {
        return new ModelAndView("/pages/hosting/host_before/sub");
    }



    // -------------------------- 로그인 확인 -----------------------------------------//
    @PostMapping("/loginok")
    public String loginOk(HttpServletRequest request, String email, String memPw) {
        if(memberApiLogicService.read(email, memPw).getData() != null) {
            HttpSession session = request.getSession();
            Long id = memberApiLogicService.read(email, memPw).getData().getMemId();
            session.setAttribute("id", id);
            return "redirect:/pages";
        } else {
            return "redirect:/pages";
        }
    }

    // -------------------------- #end 로그인 확인 -----------------------------------------//
    // -------------------------- 로그 아웃 -----------------------------------------//
    @RequestMapping("/logout")
    public String logout(HttpServletRequest request) {
        HttpSession session = request.getSession();
        session.invalidate();
        return "redirect:/pages";
    }
    // -------------------------- #end 로그 아웃 -----------------------------------------//
    // -------------------------- 프로필 저장 -----------------------------------------//
    @PostMapping("/profileImg")
    public String profileImg(HttpServletRequest request,
                             @RequestPart (value = "pic", required = false) MultipartFile pic
        )throws IOException{
        HttpSession session = request.getSession(false);
        Long id = (Long) session.getAttribute("id");

        Member member = memberRepository.findById(id).get();
        System.out.println(member.getMemPicurl()+member.getMemPic());
        // pict+url : /Users/baghaechan/Desktop/airbnb/src/main/upload/user/1/XCVyDpLMFmemyxdXSAmFrFlzpMgRQLPU.jpg
        // 실제경로 :  /Users/baghaechan/Desktop/airbnb/src/main/upload/user/1
            String url = member.getMemPicurl();
            String pict = member.getMemPic();
            File file = new File(pict+url);
            if(file.exists()){
                if(file.delete()){
                    System.out.println("파일삭제성공");
                }else{
                    System.out.println("파일삭제실패");
                }
            }else{
                System.out.println("파일이 없습니다");
            }
        String picName = pic.getOriginalFilename(); //apple.jpg
        String picExtension = FilenameUtils.getExtension(picName).toLowerCase(); //.jpg
        FilenameUtils.removeExtension(picName); //apple

        File dstPic;
        String dstPicName;
//        String createPicName;
        String picUrl = System.getProperty("user.dir") + "/src/main/upload/user/"+id+"/";

        do{
            dstPicName = RandomStringUtils.randomAlphabetic(32)+"."+picExtension;
//            createPicName = RandomStringUtils.randomAlphabetic(32)+"."+picExtension;
            dstPic = new File(picUrl+dstPicName);
        }while (dstPic.exists());

        dstPic.getParentFile().mkdir();
        pic.transferTo(dstPic);

        member.setMemPic(dstPicName);
        member.setMemPicurl(picUrl);
        memberRepository.save(member);
        return "redirect:/pages/account_profile";
    }
    // -------------------------- #end 프로필 저장 -----------------------------------------//
}