package com.example.airbnb.model.entity.lodging;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
public class LodgingPolicy {
    @Id
    private Long lodgingId;
    private String policyStanard;
    private String policyLongstay;
    private String immediHow;
    private String immediReqired;

}
