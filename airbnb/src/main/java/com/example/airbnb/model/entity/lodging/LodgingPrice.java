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
public class LodgingPrice {
    @Id
    private Long lodgingId;
    private Integer priceNormal;
    private Integer priceMin;
    private Integer priceMax;
    private Integer priceTo;
    private Integer priceClean;
    private Integer priceCleanShort;
    private Integer pricePet;
    private Integer priceExtra;
    private Integer priceWeekend;

}
