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
public class LodgingDuration {
    @Id
    private Long lodgingId;
    private Integer durationMin;
    private Integer durationDaymin;
    private Integer durationMax;
    private Integer durationCustom;
    private String durationCustommin;
    private Integer durationCustomdays;
}
