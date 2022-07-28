package com.example.airbnb.model.network.request.lodging;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class LodgingApiRequest {
    private Long lodgingId;
    private String lodgingTitle;
    private String lodgingExplain;
    private Long lodgingGuests;
    private String lodgingCovi;
    private String lodgingHref;
    private String lodgingStatus;
    private Long memId;
}
