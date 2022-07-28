package com.example.airbnb.model.entity.lodging;

import com.example.airbnb.model.enumclass.Allowed;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@EntityListeners(AuditingEntityListener.class)
public class LodgingRules {
    @Id
    private Long lodgingId;
    @Enumerated (EnumType.STRING)
    private Allowed rulesChild;
    private Allowed rulesInfant;
    private Allowed rulesPet;
    private Allowed rulesSmoking;
    private Allowed rulesEvent;
    private String rulesExtra;

}
