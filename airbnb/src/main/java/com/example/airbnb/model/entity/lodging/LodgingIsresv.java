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
public class LodgingIsresv {
    @Id
    private Long lodgingId;
    private String isresvDueday;
    private String isresvDuetime;
    private String isresvReady;
    private String isresvDue;
    private Integer isresvLimit;
}
