package com.example.airbnb.model.entity.lodging;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
public class LodgingRoom {
    @Id
    private Long lodgingId;
    private String lodgingType1;
    private String lodgingType2;
    private String lodgingType3;
    private String lodgingHigh;
    private String lodgingFloor;
    private String lodgingExtra;

}
