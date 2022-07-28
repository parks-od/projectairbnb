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
public class LodgingLocation {
    @Id
    private Long lodgingId;
    private String locationState;
    private String locationCity;
    private String locationRoad;
    private String locationDetail;
    private String locationPost;
    private String loactionExplain;
    private String loactionTraffic;
    private String loactionView;
    private String locationWay;
    private String locationManual;


}
