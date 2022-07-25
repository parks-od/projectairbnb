package com.example.airbnb.model.entity.member;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@SequenceGenerator(
        name="member_idx",
        sequenceName = "member_idx",
        initialValue = 1,
        allocationSize = 1
)
@Builder
@EntityListeners(AuditingEntityListener.class)
public class Member { // 이벤트 테이블
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "member_idx")
    private Long memId;
    private String memKnd;
    private String memName;
    private String memFirstname;
    private String memPw;
    private String email;
    private String birth;
    private String memHp;
    private String memContent;
    private String confirmStatus;
    private String isLogshare;
    private LocalDateTime confirmAt;
    private LocalDateTime updateAt;
    private LocalDateTime outAt;
}
