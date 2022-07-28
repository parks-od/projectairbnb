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
public class LodgingLocationDetail {
    @Id
    private Long lodgingId;
    private String checkSmartlock;
    private String checkDigitalock;
    private String checkKey;
    private String checkReceptionist;
    private String checkHost;
    private String checkExtra;
    private String checkExplain;
}
