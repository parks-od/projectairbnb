package com.example.airbnb.model.network.request.lodging;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class LodgingRoomApiRequest {
    private Long lodgingId;
    private String lodgingType1;
    private String lodgingType2;
    private String lodgingType3;
    private String lodgingHigh;
    private String lodgingFloor;
    private String lodgingExtra;
}
