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
public class LodgingBefore {
    @Id
    private Long lodgingId;
    private String checkinStart;
    private String checkinEnd;
    private String checkoutTime;
    private String communicateGuest1;
    private String communicateGuest2;
    private String communicateGuest3;
    private String communicateExplain;

}
