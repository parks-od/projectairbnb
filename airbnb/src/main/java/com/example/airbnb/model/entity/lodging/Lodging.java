package com.example.airbnb.model.entity.lodging;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@SequenceGenerator(
        name="lodging_seq",
        sequenceName = "lodging_seq",
        initialValue = 1,
        allocationSize = 1
)

@Builder
public class Lodging {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "lodging_seq")
    private Long lodgingId;
    private String lodgingTitle;
    private String lodgingExplain;
    private Long lodgingGuests;
    private String lodgingCovi;
    private String lodgingHref;
    private String lodgingStatus;
    private Long memId;
}
